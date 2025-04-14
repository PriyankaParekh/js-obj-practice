import {setCookie} from '../modules/cookie.js'

document.getElementById('submit').addEventListener('click',function() {
    let found = false;
    if (localStorage.getItem("users")) {
      let arr = JSON.parse(localStorage.getItem("users"));
      arr.forEach((ele) => {
        if (
          ele.email === document.form.email.value &&
          ele.password === document.form.password.value
        ) {
          found = true;
          setCookie('email', ele.email, {secure: true, 'max-age': 3600});
          setCookie('role', ele.role, {secure: true, 'max-age': 3600});

          if(ele.role==='Admin'){
            alert(ele.role);
            window.location.href='../dashboards/adminDashboard.html'
          } else{
            alert(ele.role);
            window.location.href='../dashboards/studentDashboard.html'
          }

        }
      });
      if (!found) {
        alert("user invalid");
        window.location.reload();
      }
    }
  })
