//1. Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true

delete rabbit.jumps;

alert( rabbit.jumps ); // null

delete animal.jumps;

alert( rabbit.jumps ); // undefined

//2. The task has two parts.

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

//3. We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal2 = {
  eat() {
    this.full = true;
  }
};

let rabbit2 = {
  __proto__: animal2
};

rabbit2.eat(); //animal

//4. Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.

// After you do it, such code should work:

function f() {
    alert("Hello!");
  }
  Function.prototype.defer = function (sec) {
      setTimeout(this,sec);
  }
  
  f.defer(1000); // shows "Hello!" after 1 second

// 5. Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.

// Here’s an example of how it should work:

function f(a, b) {
  alert( a + b );
}
Function.prototype.defer=function (ms){
    let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
}

f.defer(1000)(1, 2); // shows 3 after 1 second