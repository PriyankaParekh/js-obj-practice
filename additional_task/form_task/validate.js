const validateName = function (usr) {
  var regexp = /^[A-Za-z ]+$/;
  var input = usr.value;
  if (input != "") {
    if (regexp.test(input)) {
      if (usr.nextElementSibling.hidden) {
        return true;
      }
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return true;
    } else {
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return false;
    }
  }
};

const validateUsername = function (usr) {
  var regexp = /^[A-Za-z0-9._-]+$/;
  var input = usr.value;
  if (input != "") {
    if (regexp.test(input)) {
      if (usr.nextElementSibling.hidden) {
        return true;
      }
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return true;
    } else {
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return false;
    }
  }
};

const validateEmail = function (usr) {
  var regexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  var input = usr.value;
  if (input != "") {
    if (regexp.test(input)) {
      if (usr.nextElementSibling.hidden) {
        return true;
      }
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return true;
    } else {
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return false;
    }
  }
};

function validateAddress(usr) {
  var regexp = /^[A-Za-z0-9.,\w-\n ]+$/;
  var input = usr.value;
  if (input != "") {
    if (regexp.test(input)) {
      if (usr.nextElementSibling.hidden) {
        return true;
      }
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return true;
    } else {
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return false;
    }
  }
}

const validZipCode = function (usr) {
  var regexp = /^[0-9 ]{6}$/;
  var input = usr.value;
  if (input != "") {
    if (regexp.test(input)) {
      if (usr.nextElementSibling.hidden) {
        return true;
      }
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return true;
    } else {
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return false;
    }
  }
};

const validAge = function (usr) {
  var input = usr.value;
  if (input != "") {
    if (input >= 1 && input <= 100) {
      if (usr.nextElementSibling.hidden) {
        return true;
      }
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return true;
    } else {
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return false;
    }
  }
};

const validpass= function (usr) {
  var regexp = /^[A-Za-z0-9#@!$]{10}$/;
  var input = usr.value;
  if (input != "") {
    if (regexp.test(input)) {
      if (usr.nextElementSibling.hidden) {
        return true;
      }
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return true;
    } else {
      usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
      return false;
    }
  }
}

const validconfirmpass=function (usr) {
  if (password.value === cpassword.value) {
    if (usr.nextElementSibling.hidden) {
      return true;
    }
    usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
    return true;
  } else {
    usr.nextElementSibling.hidden = !usr.nextElementSibling.hidden;
  }
}

function handleSubmit(event) {
        if(validateName(document.getElementById('firstName')) &&
        validateName(document.getElementById('lastName')) &&
        validateUsername(document.getElementById('username')) &&
        validateEmail(document.getElementById('email')) &&
        validateAddress(document.getElementById('address')) &&
        validconfirmpass(document.getElementById('cpassword')) &&
        validpass(document.getElementById('password')) &&
        validZipCode(document.getElementById('zip')) &&
        validAge(document.getElementById('age'))
        ){
        alert("Entered Data is valid");
        return true;
    } else{
        alert("Entered data is invalid")
        event.preventDefault();
    }
}