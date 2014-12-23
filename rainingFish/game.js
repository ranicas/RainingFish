var Fishing = window.Fishing || {}

Fishing.Game = function () {
	this.fish = [],
	this.cat = new Fishing.Cat(Fishing.Game.CAT_POS, this)
}

Fishing.Game.DIM_X = window.innerWidth;

Fishing.Game.DIM_Y = window.innerHeight;

Fishing.Game.LEFT_BD = Fishing.Cat.WIDTH;

Fishing.Game.RIGHT_BD = Fishing.Game.DIM_X - Fishing.Cat.WIDTH;

Fishing.Game.CAT_POS = [0, Fishing.Game.DIM_Y - 300]

// Fishing.Game.NUM_FISH = 50;

Fishing.Game.NUM_DROP_FISH = 1

Fishing.Game.prototype.addFish = function (spacer) {
	//add fish random iterations
	if (Math.floor(Math.random() * spacer) === 1 ) {
	  this.fish.push(new Fishing.Fish(Fishing.Game.randomPosition(), this));
	}   
};

Fishing.Game.prototype.allObjects = function () {
  return [this.cat].concat(this.fish);
};

//only care if things collide with cat, so pop out cat and compare
Fishing.Game.prototype.checkCollisions = function () {
  var allObjects = this.allObjects().slice(1) //all obj but cat
	for(var i = 0; i < allObjects.length; i++) {
    if (allObjects[i].isCollidedWith(this.cat)) {
      allObjects[i].collideWith(this.cat);
    }
  }
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

Fishing.Game.prototype.isOutOfBounds = function (pos) {
	//only care if y value is above dimY
  if (pos[1] > Fishing.Game.DIM_Y) {
    return true;
  } else if (pos[0] < 0 || pos[0] > Fishing.Game.RIGHT_BD) { 
  	return true;
  }
  return false;
};

Fishing.Game.randomPosition = function() {
   return [Math.floor(Math.random() * Fishing.Game.RIGHT_BD) + Fishing.Game.LEFT_BD, -50]
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
  this.checkCollisions();
};