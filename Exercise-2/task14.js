// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ of​ ​ age, & descending​ ​ order​ ​ of​ ​ name.​ ​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​​:

// 1.​ ​ Id,​ ​
// 2.​ ​ Name,​ ​
// 3.  Age

// NOTE:​ ​ Array​ ​ have​ ​ minimum​ ​ 10​ ​ objects.

let arr = [  {name:  "Jack" , age : 23, id: 1}, {name:  "Sam" , age : 12, id: 2},  {name:  "Max" , age : 20, id: 3},
{name:  "mayank" , age : 19, id: 1}, {name:  "yaksh" , age : 20, id: 2},  {name:  "nilay" , age : 20, id: 3},
{name:  "sakshi" , age : 23, id: 1}, {name:  "kru" , age : 12, id: 2},  {name:  "priyanka" , age : 20, id: 3},
{name: "priya", age: 23, id:1}]

function sortByAge(arr){
    return arr.sort((a, b) => {
        return a['age'] - b['age']
    });
}

function sortByName(arr){
    return arr.sort(( (a, b) => b['name'].localeCompare(a['name'])));
}
const abc = sortByAge(arr);
console.log(abc);

const xyz=sortByName(arr);
console.log(xyz);
