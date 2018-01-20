const {expect, describe, it, output} = require('@dxcli/dev-test')
const cmd = require('../..')

describe.stdout('command', () => {
  it('says hello world!', async () => {
    await cmd.run([])
    expect(output.stdout).to.equal('hello world!\n')
  })
  it('says hello jeff!', async () => {
    await cmd.run(['--name', 'jeff'])
    expect(output.stdout).to.equal('hello jeff!\n')
  })
})
