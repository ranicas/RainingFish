var Fishing = window.Fishing || {};

Fishing.MovingObject = function (newMovingObject) {
  this.pos = newMovingObject.pos,
  this.vel = newMovingObject.vel,
  this.img = newMovingObject.img,
  this.game = newMovingObject.game
};

//TODO draw difference sizes of fish doing width, height
Fishing.MovingObject.prototype.draw = function (ctx) {
  ctx.drawImage(this.img, this.pos[0], this.pos[1])

};

Fishing.MovingObject.prototype.move = function () {
  newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
	// console.log(this.pos[0] + " " + this.vel[0] + ", " + this.pos[1] + " " + this.vel[1])
  if (this.game.isOutOfBounds(newPos) && !(this instanceof Fishing.Cat)) {
      this.game.remove(this);
  } else if (this.game.isOutOfBounds(newPos) && (this instanceof Fishing.Cat)) {
  	// debugger
  } else {
    this.pos = newPos
  }
};

//Fishing.Game.DIM_Y - 300 is top of y for cat
//cat is 176 px wide
// -cat bowl at -100px from top of cat.pos[1]
//bowl width is 50 from cat.pos[0] to 140 if cat left, 
// fish is 40px tall, 50px wide
//
// fish pos should be cat pos horizontal + 150?
//TODO redefine this to be more precise
Fishing.MovingObject.prototype.isCollidedWith = function (cat) {
	//if fish check if bottom of fish match with the bowl
	if (this.pos[0] > (cat.pos[0] + 40) && 
		 (this.pos[0] < (cat.pos[0] + 140)) && 
		(this.pos[1] >= cat.pos[1] + 80) && 
		(this.pos[1] <= cat.pos[1] + 120)) {
		return true
	}
	//if brick, check if bottom of brick match with top of cat
};

Fishing.MovingObject.prototype.collideWith = function (otherObject) {

};
