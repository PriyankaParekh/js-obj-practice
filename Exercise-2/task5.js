// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, and intersection of two arrays.

arr1 = [0,1,2,3] , arr2 = [3,4,5]
function union(arr1,arr2){
    let arr=arr1.concat(arr2);
    let set=[...new Set(arr)]
    console.log(set);
}
function diff(arr1,arr2){
    let arr=arr1.filter((arr1)=>!arr2.includes(arr1));
    console.log(arr);
}
function intersection(arr1,arr2){
    let arr=arr1.filter((arr1)=>arr2.includes(arr1));
    console.log(arr);
}

union(arr1,arr2);
diff(arr1,arr2);
diff(arr2,arr1);
intersection(arr1,arr2);