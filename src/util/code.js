var shell = require('shelljs');


var fs = require('fs')
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

module.exports = {
    /**
     * Get the path to the Solidity compiler from the SOLC_PATH
     * environment variable, or else default to 'solc'.
     */
    getSolidityCompilerExtraArgs: function (env) {
        return env.SOLC_ARGS || ''
    },
    /**
     * Get optional extra arguments for the Solidity compiler
     * from the SOLC_ARGS environment variable.
     */
    getSolidityCompilerPath: function (env) {
        // if (!env.SOLC_PATH && !shell.which('solc')) {
        //   throw new Error([
        //     'Solidity compiler not found. Please, add solc to path or',
        //     'define environment variable SOLC_PATH.'
        //   ].join(' '))
        // }
        if (!shell.which('docker')) {
            throw new Error("Docker is not found.Please install docker first")
        }
        return env.SOLC_PATH || 'docker'
    },
    /**
     * Handle any potential error codes returned by a shelljs
     * command execution.
     */
    handleErrorCode: function (commandOutput) {
        if (commandOutput.code !== 0) {
            throw new Error([
                `Command line operation failed with code ${commandOutput.code}.`,
                `Standard error output: ${commandOutput.stderr}`
            ].join('\n'))
        }
    },
    genCode: function (solidityCompilerPath, solidityCompilerExtraArgs, contractsPath) {
        //find sol first
        var res = shell.exec([" find " + contractsPath + " -type f -name \"*.sol\""].join(" "), {silent: true})
        this.handleErrorCode(res)
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
        this.handleErrorCode(commandOutput)
        return JSON.parse(commandOutput.stdout)
    },
    buildDocs: function (contracts) {
        let contents = {}
        for (const [key, value] of Object.entries(contracts)) {
            const [path, contractName] = key.split(':')
            contents[contractName] = {
                'path': path
                // "doc": value.devdoc
            }
            console.log(contractName, ":====:", value.devdoc)
            let docs = JSON.parse(value.devdoc)
            contents[contractName] = {
                'path': path,
                'title': docs.title,
                'details': docs.details,
                'methods': docs.methods
            }

        }
        return contents
    },
    writeDocs: function (output, contents) {
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
            fs.writeFileSync(output + '/contracts/' + key + '.md', content)
        }
        fs.writeFileSync(output + '/_sidebar.md', side)
    }
}
