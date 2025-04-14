import { deleteCookie, getCookie } from "../modules/cookie.js";
if(!(getCookie('email'))){
  window.location.href='../signin/signin.html'
}
document.addEventListener("DOMContentLoaded", function () {
  let email = getCookie("email");
  console.log(email);
  let arr = JSON.parse(localStorage.getItem("Enroll"))||[];
  let userArr = arr.filter((elem) => elem.email === email);
  console.log(userArr);
  let newarr = JSON.parse(localStorage.getItem("courses"))||[];
  let ans = newarr.filter((ele) =>
    userArr.some((usr) => usr.title === ele.title)
  );
  console.log(ans);
  if(ans.length===0){
    let div=document.createElement('div');
    let h3=document.createElement('h3');
    h3.textContent="No Course Assigned To You";
    div.className='d-flex justify-content-center'
    div.appendChild(h3);
    row.appendChild(div);
  }
  ans.forEach((ele) => {
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-sm-4", "mb-sm-0", "mb-4");
    colDiv.id = "uniquecard";

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    let titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.id = "title";
    titleElement.textContent = ele.title;

    let descElement = document.createElement("p");
    descElement.classList.add("card-text");
    descElement.id = "desc";
    descElement.textContent = ele.desc;

    cardBodyDiv.appendChild(titleElement);
    cardBodyDiv.appendChild(descElement);

    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);

    row.appendChild(colDiv);
  });
  document.getElementById('logout').addEventListener('click', function (event) {
    event.preventDefault();
    deleteCookie('email')
    deleteCookie('role')
    window.location.href='../signin/signin.html'
  })
});
