(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;

  var Asteroid = Asteroids.Asteroid = function (pos) {
    this.COLOR = "red";
    this.RADIUS = 10;
    MovingObject.call(this, pos);
    //random velocity
    this.vel = Asteroids.Util.randomVec(10);
  };

  Asteroids.Util.inherits(Asteroid, MovingObject);

  // Asteroid.prototype.someFUnc = functiuon () {};
  //
  // Asteroid.prototype.someFUnc = functiuon () {};
  //
  // Asteroid.prototype.someFUnc = functiuon () {};

})();
