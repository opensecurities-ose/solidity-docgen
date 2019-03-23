/* eslint-disable no-unused-vars,indent,no-undef */

import shell from 'shelljs'
import fs from 'fs'
import {buildDocId, buildSectionId} from '../src/gen/util'

const cutil = require('../src/util/code')
const solc = "ethereum/solc:0.4.24"
/**
 * Options given to the Solidity compiler when generating the AST.
 */
const COMBINED_JSON_OPTIONS = [
    'abi',
    'ast',
    'compact-format',
    'devdoc',
    'hashes',
    'interface',
    'metadata',
    'opcodes',
    'srcmap',
    'srcmap-runtime',
    'userdoc'
]
describe('doc-gen', function () {
    it('gen', function (done) {
        const contractsPath = '/Users/charlie/OneRoot/Projects/open-securities/ose-core/contracts'
        const solidityCompilerPath = cutil.getSolidityCompilerPath(process.env)
        const solidityCompilerExtraArgs = cutil.getSolidityCompilerExtraArgs(process.env)

        const {
            contracts,
            sources
        } = genCode(solidityCompilerPath, solidityCompilerExtraArgs, contractsPath)
        // console.log(contracts)
        // var contents = buildDocs(contracts)
        // console.log(contents)
        //
        // writeDocs(contents)

        done()
    })
})

function genCode(solidityCompilerPath, solidityCompilerExtraArgs, contractsPath) {
    //find sol first
    var res = shell.exec([" find " + contractsPath + " -type f -name \"*.sol\""].join(" "), {silent: true})
    cutil.handleErrorCode(res)
    var files = res.stdout.replace(new RegExp(contractsPath, 'g'), "/tmp").replace(new RegExp("\n", 'g'), " ")
    console.log(files)
    const commandOutput = shell.exec([
        `${solidityCompilerPath} run --rm -v ` + contractsPath + ":/tmp " + solc,
        `  --pretty-json`,
        "  --ignore-missing",
        `  --allow-paths /tmp`,
        `  --combined-json ${COMBINED_JSON_OPTIONS.join(',')}`,
        `  ${solidityCompilerExtraArgs}`,
        // `  $(find /tmp -type f -name "*.sol")`
        `  ${files}`
    ].join(' '), {silent: true})
    cutil.handleErrorCode(commandOutput)
    return JSON.parse(commandOutput.stdout)
}

function buildDocs(contracts) {
    let contents = {}
    for (const [key, value] of Object.entries(contracts)) {
        const [path, contractName] = key.split(':')
        contents[contractName] = {
            'path': path
            // "doc": value.devdoc
        }
        if (contractName == 'ERC20Token') {
            let docs = JSON.parse(value.devdoc)
            contents[contractName] = {
                'path': path,
                'title': docs.title,
                'details': docs.details,
                'methods': docs.methods
            }
        }
    }
    return contents
}

function writeDocs(contents) {
    var side = '- Core Contract\n'
    for (let [key, value] of Object.entries(contents)) { // loop each contract
        side = side + '    - [' + key + '](contracts/' + key + '.md)\n'
        let content = ''
        if (value.title) {
            content = ">" + value.title + '  \n'
        }
        if (value.details) {
            content = content + value.details + '\n'
        }

        // loop methods
        if (value.methods) {
            for (let [k, v] of Object.entries(value.methods)) {
                let methodC = '### ' + k.split('(')[0] + '  \n'
                if (v.details) {
                    methodC = methodC + "?>" + v.details + '  \n'
                }
                // set params
                methodC = methodC + '#### Params:  \n\n'
                //parse params
                if (v.params) {
                    for (let [k2, v2] of Object.entries(v.params)) {
                        methodC = methodC + "- `" + k2 + "` " + v2 + "  \n"
                    }
                }

                // set returns
                if (v.return) {
                    methodC = methodC + '\n#### Returns:  \n' + v.return + "  \n"
                }

                content = content + methodC + '\n'
            }
        }
        // console.log(content)
        fs.writeFileSync('./docs/contracts/' + key + '.md', content)
    }
    fs.writeFileSync('./docs/_sidebar.md', side)
}
