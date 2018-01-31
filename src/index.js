const {Command, flags} = require('@anycli/command')
const {cli} = require('cli-ux')

class AnycliExampleSingleJsCommand extends Command {
  async run() {
    const name = this.flags.name || 'world'
    cli.log(`hello ${name}!`)
  }
}

AnycliExampleSingleJsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AnycliExampleSingleJsCommand
