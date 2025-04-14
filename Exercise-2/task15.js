// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position. Also if the position does not exist then error message should be shown to the user.

let arr=[  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ];

let deletefunc=(deletedNum)=>{
    if(deletedNum>arr.length){
        console.log("Enter valid number");
        return; 
    }
    arr.splice(deletedNum,1);
    return arr;
}
let insertfunc=(insertNum,name,age)=>{
    let obj={};
    obj.name=name;
    obj.age=age;
    if(insertNum>arr.length){
        arr[insertNum]=obj;
        return arr;
    }
    arr.splice(insertNum,0,obj);
    return arr;
}
let num=+prompt("Enter num: (Delete: 1 and Insert: 2) ");
switch (num) {
    case 1:
        let deletedNum=+prompt("Enter the index you want to delete: ");
        let deletedArr=deletefunc(deletedNum);
        console.log(deletedArr);
        break;

    case 2:
        let insertNum=+prompt("Enter the index you want to insert new array element: ");
        let name=prompt("Enter name: ");
        let age=+prompt("Enter age: ");
        let insertedArr=insertfunc(insertNum,name,age);
        console.log(insertedArr);
        break;
    default:
        console.log("Enter valid number");
        break;
}
