var Fishing = window.Fishing || {};

Fishing.Util = function () {};

Fishing.Util.inherits = function (subClass, superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  subClass.prototype = new Surrogate();
};

Fishing.Util.randomVec = function (length) {
	//only move in y direction
  return [0, Math.random() * length + 1];
};

// Fishing.Util.randomStartPos = function() {
// 	//start at very top
// 	return [Math.floor(Math.random() * Fishing.Game.RIGHT_BD) + Fishing.Game.LEFT_BD, -50];
// };

Fishing.Util.randomColor = function () {
  return '#' + (Math.floor(Math.random() * 16777215)).toString(16);
};

Fishing.Util.distanceBetween = function (pos1, pos2) {
  return Math.sqrt((pos1[0] - pos2[0]) * (pos1[0] - pos2[0]) + (pos1[1] - pos2[1]) * (pos1[1] - pos2[1]))
}

