Function.prototype.inherits = function (SuperClass) {
  var Surrogate = function () {};
  Surrogate.prototype = SuperClass.prototype;

  var Subclass = this;
  Subclass.prototype = new Surrogate();
  Subclass.prototype.constructor = Subclass;
};

var Animal = function () {};
Animal.prototype //=> {}
var theAnimal = new Animal();
theAnimal.__proto__
var Cat = function () {};
Cat.inherits(Animal)
// var catPrototype = {__proto__: Animal.prototype}
// Cat.prototype = catPrototype;
var c = new Cat();
c.__proto__ //=> catPrototype

theAnimal.constructor === Animal

function MovingObject () {};
MovingObject.prototype.sayHello = function () {
  console.log("hello, I am a MovingObject");
};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);
Asteroid.prototype.asteroidHello = function () {
  console.log("Asteroid hello");
};

var moving = new MovingObject();
moving.sayHello();
// moving.asteroidHello();

var asteroid = new Asteroid();
asteroid.asteroidHello();
asteroid.sayHello();

var ship = new Ship();

console.log(asteroid.__proto__);
console.log(moving.__proto__);
console.log(ship.__proto__);
