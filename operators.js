// 1. 
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// 2. 
let i = 2;

let x = 1 + (i *= 2); //5

// 3. 
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //nan
"  -9  " + 5 // -9 5
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //nan
" \t \n" - 2 //-2

// 4. 
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

let p = prompt("First number?");
let q = prompt("Second number?");

alert(a + b); // 12

