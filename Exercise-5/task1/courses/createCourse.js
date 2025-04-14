let arr=[];
import { getCookie } from "../modules/cookie.js";
if(!(getCookie('email'))){
    window.location.href='../signin/signin.html'
  }
document.getElementById('submit').addEventListener('click', function () {
    let obj={
        title: document.form.title.value,
        desc: document.form.desc.value
    };
    let arr = JSON.parse(localStorage.getItem('courses')) || [];
    console.log(obj);
        arr.push(obj);
        localStorage.setItem('courses',JSON.stringify(arr));
        window.location.href='../dashboards/adminDashboard.html'
});