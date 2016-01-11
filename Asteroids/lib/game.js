
if (typeof window.Asteroids === "undefined") {
  window.Asteroids = {};
}

var Game = function() {
  this.dim_x = Game.DIM_X;
  this.dim_y = Game.DIM_Y;
  this.num_asteroids = Game.NUM_ASTEROIDS;
  this.asteroids = [];
};

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 9;

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < this.num_asteroids; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition));
  }
};

Game.prototype.randomPosition = function () {
  var x = Math.floor(Math.random() * this.dim_x);
  var y = Math.floor(Math.random() * this.dim_y);
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  debugger
  ctx.clearRect(0, 0, this.dim_x, this.dim_y);

  this.asteroids.forEach(function (asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(function (asteroid) {
    asteroid.move();
  });
};
