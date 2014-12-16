var Fishing = window.Fishing || {};

Fishing.GameView = function(game, ctx) {
  this.game = game,
  this.ctx = ctx;
}

Fishing.GameView.prototype.start = function () {
  var gameView = this;
  // var cat = this.game.cat;
  // gameView.bindKeyHandlers(cat);
  setInterval(function(){
    gameView.game.addFish();
    gameView.game.step();
    gameView.game.draw(gameView.ctx);
  }, 20);
};

Fishing.GameView.prototype.bindKeyHandlers = function (cat) {
  window.key('left, a', function() { cat.power([0, -1]); });
  window.key('right, d',function() { cat.power([0, 1]); });
}
