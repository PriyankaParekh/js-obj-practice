//1.
function camelize(str) {
    let splitarr=str.split('-');
    alert(splitarr);
    for(let i=0;i<splitarr.length;i++){
      if(i>=1){
      let charatarr=splitarr[i].charAt(0).toUpperCase();
      splitarr[i] = charatarr + splitarr[i].slice(1);
      }
    }
   return splitarr.join('')
  }
  camelize("background-color")

//2.
function filterRange(array,start,end){
    let newarr=[];
    for(let i=0;i<array.length;i++){
        if(array[i]>=start && array[i]<=end){
            newarr.push(array[i]);
        }
    }
    return newarr;
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//3.
function filterRangeInPlace(arr,start,end){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<start || arr[i]>end){
            arr.splice(i,1);
        }
    }
    alert(arr);
}
let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

alert( arr2 ); // [3, 1]

//4.
let arr3 = [5, 2, 1, -10, 8];

arr3.sort( (a, b) => b-a );

alert( arr3 ); // 8, 5, 2, 1, -10

//5.

function copySorted(arr) {
    return arr.slice(0,3).sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  alert( sorted );
  alert( arr4 );

//6.

class Calculator {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

//7.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(item => item.name);


alert( names ); // John, Pete, Mary

//7.
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john, pete, mary ];

function fullnamefunc(item){
    let fullName=[item.name,item.surname].join(' ')
    let id=item.id;
    return {fullName,id};
}

let usersMapped = users.map(fullnamefunc);
console.log(usersMapped);
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

//8.
function sortByAge(arr){
    arr.sort((a, b) => a.age - b.age);
}
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arrn = [ pete, john, mary ];

sortByAge(arrn);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

//9.
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
let arrnew = [1, 2, 3];

shuffle(arrnew);
// arr = [3, 2, 1]

shuffle(arrnew);
// arr = [2, 1, 3]

shuffle(arrnew);
// arr = [3, 1, 2]
// ...

//10.
function getAverageAge(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i].age;
    }
    let avgavg=sum/arr.length;
    return avgavg;
}
let johnn = { name: "John", age: 25 };
let petee = { name: "Pete", age: 30 };
let maryy = { name: "Mary", age: 29 };

let arrnewq = [ johnn, petee, maryy ];

alert( getAverageAge(arrnewq) ); // (25 + 30 + 29) / 3 = 28

//11.
function unique(arr) {
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        if(newarr.indexOf(arr[i])==-1){
            newarr.push(arr[i]);
        }
    }
    return newarr;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

//12.

// function groupById(users){
//     let newuser=users.map(newuser);
//     let id1=newuser.id;
//     return{id1, users};

// }

function groupById(users){
    return users.reduce((acc,curr)=>{
        acc[curr.id]=curr;
        return acc;
    },{});

}

let users2 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users2);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */