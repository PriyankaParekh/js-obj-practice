// Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.

let str=prompt("Enter String: ");
let num=+prompt("Enter Number",0);
function string_chop(str,num){
let arr=[];
let str1='';
for(let i=0;i<str.length;i=i+num){
        str1+=str[i]+str[i+1];
        arr.push(str1);
        str1='';
}
return arr;
}

let arr3=string_chop(str,num);
console.log(arr3);