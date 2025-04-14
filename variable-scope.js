
//1. The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // Pete

//2. The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name); //pete
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // john

//3. Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter(); //0
let counter2 = makeCounter(); //0

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1

//4. Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1

//5. Look at the code. What will be the result of the call at the last line?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); //hello john

//6. Write function sum that works like this: sum(a)(b) = a+b.

let sum = (a) => (b) => a+b;

sum(1)(2) = 3
sum(5)(-1) = 4

//7. What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // err

  let x = 2;
}

func();

//8. We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a,b){
    return function(num) {
        return num >= a && num <= b;
      };
}
function inArray(array){
    return function(arr){
    return array.includes(arr);
}
}

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//9. We’ve got an array of objects to sort:

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  function byField(str){
        return (a, b) => a[str] > b[str] ? 1 : -1;
  }
  
  users.sort(byField('name'));
  users.sort(byField('age'));

//10. The following code creates an array of shooters.

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j=i;
    let shooter = function() { // create a shooter function,
      alert( j ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.