const {Command, flags} = require('@dxcli/command')
const {cli} = require('cli-ux')

class DxcliExampleSingleJsCommand extends Command {
  async run() {
    const name = this.flags.name || 'world'
    cli.log(`hello ${name}!`)
  }
}

DxcliExampleSingleJsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DxcliExampleSingleJsCommand
