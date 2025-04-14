import { deleteCookie, getCookie } from "../modules/cookie.js";
if (!getCookie("email")) {
  window.location.href = "../signin/signin.html";
}
document.addEventListener("DOMContentLoaded", function () {
  let arr = JSON.parse(localStorage.getItem("courses")) || [];
  let len = arr.length;
  console.log(len);
  console.log(arr);
  if (arr.length) {
    arr.forEach((ele) => {
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

      let assignCourseBtn = document.createElement("a");
      assignCourseBtn.classList.add("btn", "btn-primary", "me-1");
      assignCourseBtn.textContent = "Assign Course";
      assignCourseBtn.onclick = function () {
        window.location.href = `../courses/assignCourse.html?title=${ele.title}`;
      };

      let deleteCourseBtn = document.createElement("a");
      deleteCourseBtn.href = "#";
      deleteCourseBtn.classList.add("btn", "btn-primary");
      deleteCourseBtn.textContent = "Delete Course";

      deleteCourseBtn.onclick = function () {
        colDiv.remove();
        let newele = arr.filter((elem) => elem.title !== ele.title);
        localStorage.setItem("courses", JSON.stringify(newele));
        let enrollArr = JSON.parse(localStorage.getItem("Enroll"));
        let newEnrollArr = enrollArr.filter((elem) => elem.title !== ele.title);
        console.log(newEnrollArr);
        localStorage.setItem("Enroll", JSON.stringify(newEnrollArr));
      };

      cardBodyDiv.appendChild(titleElement);
      cardBodyDiv.appendChild(descElement);
      cardBodyDiv.appendChild(assignCourseBtn);
      cardBodyDiv.appendChild(deleteCourseBtn);
      cardDiv.appendChild(cardBodyDiv);
      colDiv.appendChild(cardDiv);
      row.appendChild(colDiv);
    });
  } else {
    let div = document.createElement("h5");
    div.className='d-flex justify-content-center align-items-center'
    div.textContent = "No Courses";
    row.appendChild(div);
  }
  document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault();
    deleteCookie("email");
    deleteCookie("role");
    window.location.href = "../signin/signin.html";
  });
});
