//1. 
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4

//2.
// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
let styles=['Jazz','Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
styles.shift();
styles.unshift('Rap',"Reggae")
alert(styles);

//3.
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // a,b,function itself

//4.

function sumInput() {
  let num = [];
  while (true) {
    let value = prompt("enter num", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    num.push(+value);
  }
  let sum = 0;
  for (let number of num) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );

//5.
function getMaxSubSum(arr) {
  let maxSum = 0; 
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11

