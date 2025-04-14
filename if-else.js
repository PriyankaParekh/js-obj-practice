// 1. Will alert be shown?

if ("0") {
  alert( 'Hello' ); //yes
}

// 2. Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

var input =prompt("What is the “official” name of JavaScript? ");
if(input=="ECMAScript"){
    alert("Right!");
} else{
    alert("You don't know? ECMAScript!");
}

// 3. Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

var input =prompt("enter number: ");
if(input>=1){
    alert(1);
} else if(input<=-1){
    alert(-1);
} else{
    alert(0);
}

// 4. Rewrite this if using the conditional operator '?':

let result= (a+b<4)?"below":"over";

// 5. ternary operator
let message2 = (login == "Employee")? "Hello":(login == "Director")?"Greetings":(login == '')?"No login":"";