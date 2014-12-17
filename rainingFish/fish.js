var Fishing = window.Fishing || {};

Fishing.Fish = function (pos, game) {
	var image = new Image();
	image.src = "https://s3-us-west-1.amazonaws.com/rainingfish/goldfish-transp-50px.png";
  // image.height = "100px"
	Fishing.MovingObject.call(this, { pos: pos,
                                    vel: Fishing.Util.randomVec(5),
                                    img: image,
                                    game: game })
};

Fishing.Util.inherits(Fishing.Fish, Fishing.MovingObject);

// Fishing.Fish.RADIUS = 5;

Fishing.Fish.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Fishing.Ship) {
    otherObject.relocate();
  } else if (otherObject instanceof Fishing.Bullet) {
    game = this.game;
    game.remove(this);
    game.remove(otherObject);
  }
};