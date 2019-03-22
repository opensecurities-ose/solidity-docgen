import shell from 'shelljs'

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
    if (!env.SOLC_PATH && !shell.which('solc')) {
      throw new Error([
        'Solidity compiler not found. Please, add solc to path or',
        'define environment variable SOLC_PATH.'
      ].join(' '))
    }
    return env.SOLC_PATH || 'solc'
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
  }
}
