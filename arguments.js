// var sum = function () {
//   var result = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// };

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

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.says = function (sound, person) {
//   console.log(this.name + " says " + sound + " to " + person + "!");
//   return true;
// };
//
// var markov = new Cat("Markov");
// var breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");

//numArgs is # of arguments it needs
var curriedSum = function (numArgs) {
  var numbers = [];

  var _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };

// This returns a function that is not called yet
  // it is called if/when there are parentheses with an argument
  // after it
  return _curriedSum;
};

var sum = curriedSum(2);
// console.log(sum(5)(7)); // => 56
// With each num in parentheses (5), (7)
// calls sum, which has numbers array closed

Function.prototype.curry = function (numArgs) {
  var numbers = [];
  var func = this;

  // Similar to above, except function is this
  // instead of summing the numbers
  var _curried = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      // "this" is window here
      // for sumThree fucntion, "this" doesnt matter
      return func.apply(null, numbers);
    } else {
      return _curried;
    }
  };

  return _curried;
};

var sumThree = function (num1, num2, num3) {
  // debugger
  return num1 + num2 + num3;
};

console.log(sumThree.curry(3)(14)(20)(6)); // 30
