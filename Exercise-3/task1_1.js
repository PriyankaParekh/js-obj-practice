//1. Write​ ​ a ​​ pattern​ ​ that​ ​can identify an​ ​ e-mail​ ​ address.

let str = prompt("Enter email address");

let arr = [];
const validateEmail = function (usr) {
  var regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (usr != "") {
    if (regexp.test(usr)) {
      alert("valid email");
    } else {
      alert("invalid email");
    }
  }
};

let email = validateEmail(str);
console.log(email);
