// Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.

// Input : '<p><strong><em>Javascript​ ​ Exercises</em></strong></p>'
// Output : Javascript​ Exercises
function trimfunc(str) {
  let arr = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "<") {
      arr.push(temp);
    } else if (str[i] == ">") {
      temp = "";
      continue;
    }
    temp += str[i];
  }
  alert(arr.join(""));
}
let str = prompt("Enter String");
trimfunc(str);
