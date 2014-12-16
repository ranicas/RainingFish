var Fishing = window.Fishing || {};

Fishing.Fish = function (pos, game) {
	var img = new Image();
	img.src = "https://s3-us-west-1.amazonaws.com/rainingfish/goldfish.png"
  Fishing.MovingObject.call(this, { pos: pos,
                                    vel: Fishing.Util.randomVec(3),
																		radius: Fishing.Fish.RADIUS0,
                                    img: img,
                                    game: game })
};

Fishing.Util.inherits(Fishing.Fish, Fishing.MovingObject);

Fishing.Fish.RADIUS = 5;

Fishing.Fish.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Fishing.Ship) {
    otherObject.relocate();
  } else if (otherObject instanceof Fishing.Bullet) {
    game = this.game;
    game.remove(this);
    game.remove(otherObject);
  }
};