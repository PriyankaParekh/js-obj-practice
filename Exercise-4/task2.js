let rows = document.getElementsByTagName("tr").length;

function add() {
  let fname = form.firstName.value;
  let lname = form.lastName.value;
  if (fname == "" || lname == "" ||!lname.trim()||!fname.trim()) {
    alert("Please Enter something into field");
    form.firstName.value = "";
    form.lastName.value = "";
    return;
  }
  if(fname=='' || lname==''){
    alert('Please Enter something into field')
    return;
  }
  if (mainBtn.innerText == "Add") {
    buildTable(fname, lname);
  } else {
    let ffname = form.firstName.value.trim();
    let llname = form.lastName.value.trim();
    let rowNum = form.hiddenEle.value;
    let row = document.getElementById(rowNum);
    let fname = row.querySelector(".fname");
    let lname = row.querySelector(".lname");
    fname.value = ffname;
    lname.value = llname;
    mainBtn.innerHTML = "Add";
  }
}

function buildTable(fname, lname) {
  let div = document.createElement("tr");
  div.id = rows;

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
  deleteBtn.className = "btn btn-danger m-2";
  updateBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";
  fRow.value = fname.trim();
  lRow.value = lname.trim();
  fRow.disabled = true;
  lRow.disabled = true;
  
  deleteBtn.onclick = function () {
    div.remove();
  };

  updateBtn.onclick = function () {
    form.firstName.value = fRow.value;
    form.lastName.value = lRow.value;
    fRow.value = form.firstName.value.trim();
    lRow.value = form.lastName.value.trim();
    hiddenEle.value = noRow.value;
    fRow.disabled = true;
    lRow.disabled = true;
    mainBtn.innerHTML = "Update";
  };

  div.append(fRow, lRow, updateBtn, deleteBtn);
  table.append(div);
}
