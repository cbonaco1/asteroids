(function () {
  if (typeof window.Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;

    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function (length) {
    var x = Math.floor(Math.random() * length);
    var y = Math.floor(Math.random() * length);

    return [x, y];
  };
});
