const Game = artifacts.require("Game");

contract("Game", function() {
  it("should assert true", async function(done) {
    await Game.deployed();
    assert.isTrue(true);
    done();
  });
});
