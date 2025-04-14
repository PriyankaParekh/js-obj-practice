let rows = document.getElementsByTagName("tr").length;

function add() {
  let fname = form.firstName.value;
  let lname = form.lastName.value;
  if (
    fname == "" ||
    lname == "" ||
    lname.includes(" ") ||
    fname.includes(" ")
  ) {
    alert("Please Enter something into field");
    form.firstName.value = "";
    form.lastName.value = "";
    return;
  }
  if (mainBtn.innerText == "Add") {
    buildTable(fname, lname);
    form.firstName.value = "";
    form.lastName.value = "";
    document.getElementById("selectAll").checked = false;
  } else {
    let ffname = form.firstName.value;
    let llname = form.lastName.value;
    let rowNum = form.hiddenEle.value;
    let row = document.getElementById(rowNum);
    row.querySelector(".deleteBtn").disabled = false;
    const selectedRowCount = document.querySelectorAll(".checkbox:checked").length;
    if (selectedRowCount > 0) {
      document.getElementById("deleteBtn").disabled = false;
    }
    let fname = row.querySelector(".fname");
    let lname = row.querySelector(".lname");
    fname.value = ffname;
    lname.value = llname;
    mainBtn.innerHTML = "Add";
    form.firstName.value = "";
    form.lastName.value = "";
    
  }
}

function buildTable(fname, lname) {
  let div = document.createElement("tr");
  div.id = rows;
  let checkedBtn = document.createElement("input");
  checkedBtn.addEventListener("click", updateSelectedRowCount);
  let fRow = document.createElement("input");
  let lRow = document.createElement("input");
  let noRow = document.createElement("input");
  noRow.value = rows;
  rows++;
  noRow.hidden = true;
  let updateBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  div.className = "container d-flex justify-content-center";
  fRow.className = "form-control m-3 fname";
  lRow.className = "form-control m-3 lname";
  updateBtn.className = "btn btn-success m-2";
  deleteBtn.className = "deleteBtn btn btn-danger m-2";
  checkedBtn.type = "checkbox";
  checkedBtn.className = "checkbox";
  updateBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";
  fRow.value = fname;
  lRow.value = lname;
  fRow.disabled = true;
  lRow.disabled = true;

  deleteBtn.onclick = function () {
    div.remove();
  updateSelectedRowCount();
  };

  updateBtn.onclick = function () {
    deleteBtn.disabled = true;
    form.firstName.value = fRow.value;
    form.lastName.value = lRow.value;
    fRow.value = form.firstName.value;
    lRow.value = form.lastName.value;
    hiddenEle.value = noRow.value;
    fRow.disabled = true;
    lRow.disabled = true;
    mainBtn.innerHTML = "Update";
    document.getElementById("deleteBtn").disabled = true;
  };

  div.append(checkedBtn, fRow, lRow, updateBtn, deleteBtn);
  table.append(div);
}

function selectAll() {
  const checkboxes = document.querySelectorAll(".checkbox");
  const selectAllCheckbox = document.getElementById("selectAll");
  if (selectAllCheckbox.checked) {
    document.getElementById("totalRow").textContent = checkboxes.length;
    deleteBtn.disabled = false;
  } else {
    document.getElementById("totalRow").textContent = "0";
    deleteBtn.disabled = true;
  }
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;
  });
}

function deleteAll() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const div = checkbox.closest("tr"); 
      if (div) {
        div.remove();
      }
    }
  });
  updateSelectedRowCount();
}

function updateSelectedRowCount() {
  const selectedRowCount = document.querySelectorAll(".checkbox:checked").length;
  console.log(selectedRowCount);
  const checkboxes = document.querySelectorAll(".checkbox").length;
  let selectAllCheckbox = document.getElementById("selectAll");
  if (selectedRowCount === checkboxes && selectedRowCount !== 0) {
    console.log("same");
    selectAllCheckbox.checked = true;
  } else{
    selectAllCheckbox.checked = false;
  }
  if (selectedRowCount > 0) {
    deleteBtn.disabled = false;
  } else {
    deleteBtn.disabled = true;
  }

  document.getElementById("totalRow").textContent = selectedRowCount;
}

document.querySelectorAll(".checkbox").forEach((checkbox) => {
  checkbox.addEventListener("click", updateSelectedRowCount);
  console.log(checkbox);
});

updateSelectedRowCount();
