const NameRegex = artifacts.require('NameRegex.sol');

contract('Name Regex', function () {
  describe('contract testing', async () => {
    it('valid name', async () => {
        try {
            let nameRegex = NameRegex.deployed();
            
            assert.equal(await nameRegex.matches('x'), true, 'name isn\'t correct');
            assert.equal(await nameRegex.matches('-'), false, 'name isn\'t correct');
        } catch (err) {
            console.log(err);
        }
    })

    it('invalid name', async () => {

    })
  })
})