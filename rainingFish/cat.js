var Fishing = window.Fishing || {};

Fishing.Cat = function (pos, game) {
	var image = new Image();
	image.src = "https://s3-us-west-1.amazonaws.com/rainingfish/cat_with_bowl300px.gif";
  Fishing.MovingObject.call(this, { pos: pos,
                                    vel: [0, 0],
                                    radius: Fishing.Cat.RADIUS,
                                    img: image,
																		game: game });
};

Fishing.Cat.WIDTH = 172;

Fishing.Util.inherits(Fishing.Cat, Fishing.MovingObject);

Fishing.Cat.prototype.power = function(impulse, left) {
	//disable move left or right if at edge
	if ((this.pos[0] + this.vel[0]) < 0) {
		this.vel[0] = 0;
	} else if ((this.pos[0] + this.vel[0]) > Fishing.Game.RIGHT_BD) {
		this.vel[0] = 0;
	} else {
	  this.vel[0] += impulse[0];
	  this.vel[1] += impulse[1];
	}
	
	if (left) {
		this.img.src = "https://s3-us-west-1.amazonaws.com/rainingfish/cat_with_bowl300px.gif"
	} else {
		this.img.src = "https://s3-us-west-1.amazonaws.com/rainingfish/cat_with_bowl300pxRT.gif"
	}
};

//need this?
Fishing.Cat.prototype.relocate = function () {
  this.pos = Fishing.Game.CAT_POS;
  this.vel = [0, 0];
};

