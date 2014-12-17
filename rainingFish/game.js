var Fishing = window.Fishing || {}

Fishing.Game = function () {
	this.fish = []
}

Fishing.Game.DIM_X = window.innerWidth;

Fishing.Game.DIM_Y = window.innerHeight;

// Fishing.Game.NUM_FISH = 50;

Fishing.Game.NUM_DROP_FISH = 1

Fishing.Game.prototype.addFish = function (spacer) {
	//add fish random iterations
	if (Math.floor(Math.random() * spacer) === 1 ) {
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
	//only care if y value is above dimY
  if (pos[1] > Fishing.Game.DIM_Y) {
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
		delete(obj)
  } 
}

Fishing.Game.prototype.step = function () {
  this.moveObjects();
  // this.checkCollisions();
};