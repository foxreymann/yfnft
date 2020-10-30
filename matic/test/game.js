const Game = artifacts.require("Game")

contract("Game", accounts => {
  let instance, owner, user1, user2, user3, user4, user5, user6, user7, user8, bot

  before(() => {
    owner = accounts[0]
    user1 = accounts[1] // L1
    user2 = accounts[2] // L2
    user3 = accounts[3] // L3
    user4 = accounts[4] // L4
    user5 = accounts[5] // L5
    user6 = accounts[6] // might win
    user7 = accounts[7] // might win
    user8 = accounts[8] // might win
    bot = accounts[9]
  })

  beforeEach(async () => {
    try {
      instance = await Game.new()
      // await instance.setBot(bot.substring(2))
    } catch (err) {
      console.error(err)
      throw err
    }
  })

  it("Should make first account an owner", async () => {
    try {
      assert.equal(await instance.owner(), owner)
    } catch (err) {
      console.error(err)
      throw err
    }
  })
})
