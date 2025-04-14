// Input:
const nestedObjects = [{ a: { b: 1 } }, { c: { d: 2 } }];

let temp={};
nestedObjects.forEach((ele)=>{
    if(typeof ele==='object'){
        for(key in ele){
           if(typeof ele[key]==='object'){
            for(key2 in ele[key]){
                // console.log(key2);
                temp[`${key}.${key2}`] = ele[key][key2];
                
            }
           }
        //    console.log(key);
        }
    }
})
console.log(temp);

// Output:
// { 'a.b': 1, 'c.d': 2 }


const data = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
let temp2={};
data.forEach((ele)=>{
    for(key in ele){
        temp2[ele['name']]=ele['age'];
    }
})
console.log(temp2);
// { Alice: 30, Bob: 25, Charlie: 35 }


const shoppingLists = [
    { store: "Grocery", items: ["Apples", "Bananas", "Milk"] },
    { store: "Hardware", items: ["Screws", "Hammer", "Nails"] }
];

let arr=[];
shoppingLists.forEach((ele)=>{
    ele.items.forEach((ele2)=>{
        arr.push(ele2);
    })
})
console.log(arr);

// ["Apples", "Bananas", "Milk", "Screws", "Hammer", "Nails"]

const grades = {
    Alice: { math: 90, science: 85, history: 75 },
    Bob: { math: 80, science: 70, history: 85 },
    Charlie: { math: 95, science: 90, history: 80 }
};

// let newset=new Set();
let mainarr=[];
for (key in grades) {
    if(typeof grades[key]==='object'){
        for (const key2 in grades[key]) {
            if(mainarr.includes(key2)){
                continue;
            } else{
                mainarr.push(key2);
            }
        }
    }
}
console.log(mainarr);
// ["math", "science", "history"]


const data2 = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];

let ansObj={};
data2.forEach((ele)=>{
        ansObj[ele['id']]={name:ele['name'], age:ele['age']};
})
console.log(ansObj);
// { 1: { name: "Alice", age: 30 }, 2: { name: "Bob", age: 25 }, 3: { name: "Charlie", age: 35 } }

const data3 = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [75, 80, 85] },
    { id: 3, name: "Charlie", scores: [95, 88, 91] }
];

let temp3={};
data3.forEach((ele)=>{
    let avg=0;
    avg=ele.scores.reduce((acc, curr)=>{
        acc=(acc+curr);
        // console.log(acc);
        return acc;
    },0)
    console.log(avg);
    temp3[ele['name']]=avg/3;
})
console.log(temp3);
// { Alice: 89, Bob: 80, Charlie: 91.33 }

const data4 = [
    { name: "Alice", grades: { math: 90, science: 85, history: 75 } },
    { name: "Bob", grades: { math: 80, science: 70, history: 85 } },
    { name: "Charlie", grades: { math: 95, science: 90, history: 80 } }
];

// Initialize an object to store the sum of grades for each subject
let sumGrades = { math: 0, science: 0, history: 0 };

// Iterate over each student's grades
data4.forEach((student) => {
    // Iterate over each subject in the student's grades
    Object.keys(student.grades).forEach((subject) => {
        // Add the grade to the sum of grades for the corresponding subject
        sumGrades[subject] += student.grades[subject];
    });
});

// Calculate the average grade for each subject
let averageGrades = {};
Object.keys(sumGrades).forEach((subject) => {
    averageGrades[subject] = (sumGrades[subject] / data4.length).toFixed(2);
});

console.log(averageGrades);
// { math: 88.33, science: 81.67, history: 80 }

const orders = [
    { id: 1, items: ["Apple", "Banana"] },
    { id: 2, items: ["Orange", "Banana", "Apple"] },
    { id: 3, items: ["Apple", "Orange"] }
];

let itemCounts = {};

// Iterate over each order
orders.forEach((order) => {
    // Iterate over each item in the order
    order.items.forEach((item) => {
        // Increment the count for the item or initialize it to 1 if it doesn't exist
        itemCounts[item] = (itemCounts[item] || 0) + 1;
    });
});

console.log(itemCounts);

// { Apple: 3, Banana: 2, Orange: 2 }


const data5 = [
    { id: 1, name: "Alice", age: 30, department: "HR" },
    { id: 2, name: "Bob", age: 25, department: "Engineering" },
    { id: 3, name: "Charlie", age: 35, department: "HR" }
];
// Desired Output:

// javascript
// Copy code
// { HR: { totalAge: 65, averageAge: 32.5 }, Engineering: { totalAge: 25, averageAge: 25 } }

 
let obj = {
    a: [{x:10}, {x:20}],
    b: [{x:30}, {x:40}],
    c: [{x:50}, {x:60}],
    d: [{x:70}, {x:80}],
    e: [{x:90}, {x:100}],
    f: [{x:110}, {x:120}],
}
 
function insertObject(obj, objKey, index, newKey, newValue){
       const key = obj[objKey];
       console.log(key);
        const newObj = {};
        newObj[newKey] = newValue
        key.splice(index, 0, newObj);
       
        console.log(obj)
   }
 
 
insertObject(obj, 'a', '0', 'x', 30);


