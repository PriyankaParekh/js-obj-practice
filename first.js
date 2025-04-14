const inputObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const inputArray = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const obj3 = {
    1: 'apple',
    2: 'banana',
    3: 'orange'
};

function first(obj) {
    obj['location']=obj['address'];
    delete obj['address'];
    return obj;
}

function second(arr) {
    arr.forEach(ele => {
        ele['useId']=ele['id'];
        ele['userName']=ele['name'];
        delete ele['id'];
        delete ele['name'];
    });
    return arr;
}

function third(obj) {
    for (const key in obj) {
      obj[obj[key]]=key;
      delete obj[key];
    }
    return obj;
}

console.log(first(inputObj));
console.log(second(inputArray));
console.log(third(obj3));

//1. {
//     name: 'John',
//     location: {
//         city: 'New York',
//         country: 'USA'
//     },
//     age: 30
// }

//2. const outputArray = [
//     { userId: 1, userName: 'Alice' },
//     { userId: 2, userName: 'Bob' },
//     { userId: 3, userName: 'Charlie' }
// ];

//3. const outputObj = {
//     apple: 1,
//     banana: 2,
//     orange: 3
// };

