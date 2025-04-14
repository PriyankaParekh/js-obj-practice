const inputObj = {
  id: 1,
  name: "Alice",
  details: {
    age: 25,
    occupation: "Engineer",
  },
  hobbies: ["reading", "painting"],
  address: {
    city: "New York",
    country: "USA",
  },
};

const obj2 = {
  a: 5,
  b: {
    c: 10,
    d: 15,
  },
  e: [20, 25, 30],
};

const obj3 = {
    user_id: 101,
    user_name: 'John',
    user_address: {
        user_city: 'New York',
        user_country: 'USA'
    }
};

function first(inputObj) {
  let ans = [];
  for (const key in inputObj) {
    if (
      typeof inputObj[key] === "number" ||
      typeof inputObj[key] === "string"
    ) {
      ans.push(key);
    } else {
      if (inputObj[key] instanceof Array) {
        continue;
      }
      if (typeof inputObj[key] === "object") {
        for (const key2 in inputObj[key]) {
          // if(key2.length>1)
          ans.push(key2);
        }
      }
    }
  }
  return ans;
}

function second(obj2) {
  let sum = 0;
  for (const key in obj2) {
    if (typeof obj2[key] === "object") {
      for (const key2 in obj2[key]) {
        sum+=obj2[key][key2];
      }
    } else{
        sum+=obj2[key];

    }
  }
  return sum;
}

console.log(first(inputObj));
console.log(second(obj2));

//1. Desired Output:
// ['id', 'name', 'age', 'occupation', 'city', 'country']

//2. 105

//3. {
//     userId: 101,
//     userName: 'John',
//     userAddress: {
//         userCity: 'New York',
//         userCountry: 'USA'
//     }
// }