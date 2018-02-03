const {Command, flags} = require('@anycli/command')
const {cli} = require('cli-ux')

class AnycliExampleSingleJsCommand extends Command {
  async run() {
    const {flags} = this.parse(AnycliExampleSingleJsCommand)
    const name = flags.name || 'world'
    cli.log(`hello ${name} from @anycli/example-single-js!`)
  }
}

AnycliExampleSingleJsCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version(),
  // add --help flag to show CLI version
  help: flags.help(),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AnycliExampleSingleJsCommand
