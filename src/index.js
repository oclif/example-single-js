const {Command, flags} = require('@oclif/command')

class OclifExampleSingleJsCommand extends Command {
  async run() {
    const {flags} = this.parse(OclifExampleSingleJsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ${__filename}!`)
  }
}

OclifExampleSingleJsCommand.description = `
Describe the command here
...
Extra documentation goes here
`

OclifExampleSingleJsCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version(),
  // add --help flag to show CLI version
  help: flags.help(),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = OclifExampleSingleJsCommand
