// Create a script that prompts the visitor to enter two numbers and then shows their sum.

var a=prompt("enter 1 num: ","");
var b=prompt("enter 2 num: ","");

alert(+a + +b);

alert( 6.35.toFixed(20) ); // 6.34999999999999964473

function readNumber() {
    let num;
  
    do {
      num = prompt("enter num?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(readNumber);

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
  