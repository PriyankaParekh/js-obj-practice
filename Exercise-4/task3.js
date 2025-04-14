let rows = document.getElementsByTagName("tr").length;
let arr=[];
function add() {
  let fname = form.firstName.value;
  let lname = form.lastName.value;
  if (fname == "" || lname == "" ||lname.includes(" ")||fname.includes(" ")) {
    alert("Please Enter something into field");
    form.firstName.value = "";
    form.lastName.value = "";
    return;
  }
  console.log(mainBtn.innerText);
  if (mainBtn.innerText == "Add") {
    let temp = {};
    temp["fname"] = fname;
    temp["lname"] = lname;
    if((isObjectPresentInArray(temp,users) || isObjectPresentInArray(temp,arr))){
      alert('person already exist');
      return;
 }
 arr.push(temp);
    buildTable(fname, lname);
    form.firstName.value = "";
    form.lastName.value = "";
  } else {
    if (users.some((user) => user.fname === form.firstName.value && user.lname === form.lastName.value)) {
      alert("This entry already exists.");
      return;
    }
    
    let ffname = form.firstName.value;
    let llname = form.lastName.value;
    let rowNum = form.hiddenEle.value;
    let index=document.getElementById('arrIndex');
    let row = document.getElementById(rowNum);
    let fname = row.querySelector(".fname");
    let lname = row.querySelector(".lname");
    row.querySelector(".deleteBtn").disabled=false;
    
    fname.value = ffname;
    lname.value = llname;
    let temp = {};
    temp["fname"] = ffname;
    temp["lname"] = llname;
    if(index.value!=='false'){
      arr.splice(index.value,1,temp);
    } else{
      arr.push(temp);
    }
    mainBtn.innerHTML = "Add";
    form.firstName.value = "";
    form.lastName.value = "";
    
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
  deleteBtn.className = "btn btn-danger m-2 deleteBtn";
  updateBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";
  fRow.value = fname;
  lRow.value = lname;
  fRow.disabled = true;
  lRow.disabled = true;

  deleteBtn.onclick = function () {
    let temp = {};
    temp["fname"] = div.querySelector('.fname').value;
    temp["lname"] = div.querySelector('.lname').value;
    let eleindex=isObjectPresentInArray(temp,arr);
    arr.splice(eleindex,1);
    div.remove();
  };

  updateBtn.onclick = function () {
    deleteBtn.disabled=true;
    form.firstName.value = fRow.value;
    form.lastName.value = lRow.value;
    fRow.value = form.firstName.value;
    lRow.value = form.lastName.value;
    hiddenEle.value = noRow.value;
    let temp = {};
    temp["fname"] = form.firstName.value ;
    temp["lname"] = form.lastName.value ;
    let eleindex=isObjectPresentInArray(temp,arr);
    document.getElementById('arrIndex').value=eleindex;
    fRow.disabled = true;
    lRow.disabled = true;
    mainBtn.innerHTML = "Update";
    
  };

  div.append(fRow, lRow, updateBtn, deleteBtn);
  table.append(div);
  // 1;
}
const users = [
  {
    fname: "mayank",
    lname: "patel",
  },
  {
    fname: "deepak",
    lname: "patel",
  },
  {
    fname: "rahul",
    lname: "patel",
  },
  {
    fname: "priyanka",
    lname: "patel",
  },
  {
    fname: "yaksh",
    lname: "patel",
  },
  {
    fname: "kartik",
    lname: "patel",
  },
  {
    fname: "dhyey",
    lname: "patel",
  },
  {
    fname: "jeel",
    lname: "patel",
  },
];

function isObjectPresentInArray(obj, array) {
  const index = array.findIndex(item => JSON.stringify(item) === JSON.stringify(obj));
  if(index === -1){
      return false;
  }
  return (index === 0) ? true : index ;
}


function RemoveDuplicates(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  
  const uniqueArray = mergedArray.filter((item, index) => {
      const firstIndex = mergedArray.findIndex(obj => JSON.stringify(obj) === JSON.stringify(item));
      return index === firstIndex;
  });

  return uniqueArray;
}

function renderData() {
  table.innerHTML = null;
  console.log("hy");
  let uniquearr = RemoveDuplicates(users,arr);
  uniquearr.forEach((obj) => {
    buildTable(obj.fname, obj.lname);
  });
}

function findUniqueEntries(array) {
  return array.filter((obj, index) => {
    return (
      array.findLastIndex(
        (item) => JSON.stringify(item) === JSON.stringify(obj)
      ) === index
    );
  });
}
