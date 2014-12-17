var Fishing = window.Fishing || {};

Fishing.MovingObject = function (newMovingObject) {
  this.pos = newMovingObject.pos,
  this.vel = newMovingObject.vel,
  this.img = newMovingObject.img,
  this.game = newMovingObject.game
};

Fishing.MovingObject.prototype.draw = function (ctx) {
  ctx.drawImage(this.img, this.pos[0], this.pos[1])

};

Fishing.MovingObject.prototype.move = function () {
  newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
	// console.log(this.pos[0] + " " + this.vel[0] + ", " + this.pos[1] + " " + this.vel[1])
  if (this.game.isOutOfBounds(newPos)) {
      this.game.remove(this);
  } else {
    this.pos = newPos
  }
};

//TODO redefine this to be more precise
Fishing.MovingObject.prototype.isCollidedWith = function (otherObject) {
  var distance = Fishing.Util.distanceBetween(this.pos, otherObject.pos);
  var radii = this.radius + otherObject.radius;
  if (distance <= radii) {
    return true;
  } else {
    return false;
  }
};

Fishing.MovingObject.prototype.collideWith = function (otherObject) {

};
