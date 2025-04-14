alert(null || 2 || undefined); //2

alert(alert(1) || 2 || alert(3)); // alert 1 than 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // alert 1 and undefined

alert(null || (2 && 3) || 4); //3

//Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

if (age <= 14 && age >= 90) {
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

//1.
if (!(age <= 14 && age >= 90)) {
}

//2.
if (age > 14 || age < 90) {
}

if (-1 || 0) alert("first"); //first
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third"); //third

var name = prompt("enter name: ", "");
if (name === "Admin" || name === "admin") {
  var password = prompt("enter password: ", "");
  if (password === "TheMaster") {
    alert("welcome");
  } else if (password===""||password===null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (name===""||name===null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
