var Fishing = window.Fishing || {}

Fishing.Game = function () {
	this.fish = []
}

Fishing.Game.DIM_X = window.innerWidth;

Fishing.Game.DIM_Y = window.innerHeight;

Fishing.Game.NUM_FISH = 10;

Fishing.Game.prototype.addFish = function () {
  for(var i = this.fish.length; i < Fishing.Game.NUM_FISH; i++) {
    this.fish.push(new Fishing.Fish(Fishing.Game.randomPosition(), this));
  }
};

Fishing.Game.prototype.allObjects = function () {
  return this.fish //.concat([this.cat]);
};

Fishing.Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Fishing.Game.DIM_X, Fishing.Game.DIM_Y);
  this.allObjects().forEach(function (el) {
		el.draw(ctx); 
	});
};

Fishing.Game.prototype.moveObjects = function() {
  this.allObjects().forEach(function(el) { el.move(); });
};

//TODO define out of bound to include object so not to disappear
Fishing.Game.prototype.isOutOfBounds = function (pos) {
  if (pos[0] < 0 || pos[0] > Fishing.Game.DIM_Y) {
    return true;
  }
  if (pos[1] < 0 || pos[1] > Fishing.Game.DIM_X) {
    return true;
  }
  return false;
};

Fishing.Game.randomPosition = function() {
   return Fishing.Util.randomStartPos(Fishing.Game.DIM_X);
};

Fishing.Game.prototype.remove = function (obj) {
  if (obj instanceof Fishing.Fish) {
    var index = this.fish.indexOf(obj);
    this.fish.splice(index, 1);
		// obj.remove();
  } 
}

Fishing.Game.prototype.step = function () {
  this.moveObjects();
  // this.checkCollisions();
};