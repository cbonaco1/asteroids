var sum = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

// markov.says.myBind(breakfast)("meow", "a tree");
// markov.says.myBind(breakfast)("meow")("a tree");
Function.prototype.myBind = function () {
  // set var object to the first argument, which we want to bind
  var obj = arguments[0];
  // collect any other arguments after object (in first array)
  // note that it may be empty
  var otherArgs = Array.prototype.slice.call(arguments, 1);

  // the anonymous function we are returning
  var fn = this;
  var func = function () {
    // combining otherArts with the second set of arguments (in second array)
    // note that there may not be a second array
    for (var i = 0; i < arguments.length; i++) {
      otherArgs.push(arguments[i]);
    }
    // this calls the function with the correct object to be bound
    // along with the arguments needed for the function
    fn.apply(obj, otherArgs);
  };
  return func;
};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, person) {
  console.log(this.name + " says " + sound + " to " + person + "!");
  return true;
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
