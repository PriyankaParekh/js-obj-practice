// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.

let str=1023165454197;
function converter(str){
    let newstr=str.toLocaleString();
    return newstr;
}
converter(str);