const {expect, test} = require('@anycli/test')
const cmd = require('..')

const command = '@anycli/example-single-js'

describe(command, () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world from @anycli/example-single-js!')
  })

  test
  .stdout()
  .do(() => cmd.run(['--name', 'jeff']))
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff from @anycli/example-single-js!')
  })
})
