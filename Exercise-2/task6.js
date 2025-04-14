// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​with​ ​ values​ ​ (either numeric or​ string​ ​ with​ ​ one character)​ ​ on​ ​ supplied​ ​ bounds.

arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function numStr(m, n, num) {
  let newarr = [];
  if (arr.includes(m) || arr.includes(n)) {
    for(let i=arr.indexOf(m);i<=arr.indexOf(n);i=i+num){
        newarr.push(arr[i]);
    }
    }
   else {
    console.log("element not present in this array");
  }
  console.log(newarr);
}

numStr("p", "z", 3);