const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('@oclif/example-single-js', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world from ./src/@oclif/example-single-js.js!')
  })

  test
  .stdout()
  .do(() => cmd.run(['--name', 'jeff']))
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff from ./src/@oclif/example-single-js.js!')
  })
})
