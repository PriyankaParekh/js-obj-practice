// Write​ ​ a ​ ​ JavaScript​ ​function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).

let arr1new=[];
let str1=prompt("Enter string: ");
let str2="This is a sample string";
let num=+prompt("Enter number",1);
arr1new=str2.split("");
arr1new.splice(num, 0, str1);
let strnew=arr1new.join('');
console.log(strnew);