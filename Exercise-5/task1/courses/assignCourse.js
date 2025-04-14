import { getCookie } from "../modules/cookie.js";
const urlParams = new URLSearchParams(window.location.search);
const titleQ = urlParams.get("title");

if(!(getCookie('email'))){
  window.location.href='../signin/signin.html'
}
document.addEventListener("DOMContentLoaded", function () {
  let arr = JSON.parse(localStorage.getItem("users"))||[];
  console.log(arr);

  console.log(titleQ);
  let tbody = document.getElementById("tbody");
  let tbody2 = document.getElementById("tbody2");

  let userArr = arr.filter((elem)=> elem.role ==="Student");
  let enroll=JSON.parse(localStorage.getItem("Enroll"))||[];
  let newData =enroll.filter(item=>((item.title===titleQ)));
  let ans = userArr.filter(ele=> !newData.some(usr => usr.email === ele.email))
  let ans2 = userArr.filter(ele=> newData.some(usr => usr.email === ele.email))

  ans.forEach((ele) => {
    let tr = document.createElement("tr");
    let cb = document.createElement("td");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checkbox3";
    cb.appendChild(check);
    let th1 = document.createElement("td");
    th1.textContent = ele.name;
    let th2 = document.createElement("td");
    th2.textContent = ele.email;
    th2.className = "emailuser";
    tr.appendChild(cb);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tbody.appendChild(tr);
  });

  ans2.forEach((ele) => {
    let tr = document.createElement("tr");
    let th1 = document.createElement("td");
    th1.textContent = ele.name;
    let th2 = document.createElement("td");
    th2.textContent = ele.email;
    th2.className = "emailuser";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tbody2.appendChild(tr);
  });

  document.querySelectorAll(".checkbox3").forEach((checkbox) => {
  console.log(checkbox);
  checkbox.addEventListener("click", updateSelectedRowCount);
});

updateSelectedRowCount();
});

let mainArr = JSON.parse(localStorage.getItem("Enroll")) || [];
document.getElementById("assign").addEventListener("click", function () {
  let elem = document.querySelectorAll(".checkbox3:checked");
  elem.forEach((ele) => {
    let row = ele.closest("tr");
    let email = row.querySelector(".emailuser").textContent;
      let obj = {
        title: titleQ,
        email: email,
      };
      mainArr.push(obj);
      localStorage.setItem("Enroll", JSON.stringify(mainArr));
    
  });
  window.location.href = "../dashboards/adminDashboard.html";
});

document.getElementById('selectAll').addEventListener('click', function (){
  const checkboxes = document.querySelectorAll(".checkbox3");
  const selectAllCheckbox = document.getElementById("selectAll");
  if (selectAllCheckbox.checked) {
    document.getElementById("totalRow").textContent = checkboxes.length;
  } else {
    document.getElementById("totalRow").textContent = "0";
  }
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;
  });
})

function updateSelectedRowCount() {
  const selectedRowCount = document.querySelectorAll(".checkbox3:checked").length;
  console.log(selectedRowCount);
  const checkboxes = document.querySelectorAll(".checkbox3").length;
  let selectAllCheckbox = document.getElementById("selectAll");
  if (selectedRowCount === checkboxes && selectedRowCount !== 0) {
    console.log("same");
    selectAllCheckbox.checked = true;
  } else{
    selectAllCheckbox.checked = false;
  }
  document.getElementById("totalRow").textContent = selectedRowCount;
}

