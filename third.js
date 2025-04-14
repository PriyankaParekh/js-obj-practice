const inputObj = {
    id: 1,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        postalCode: '12345'
    },
    phone: '+1234567890',
    email: 'john.doe@example.com'
};

let outputArr = [];

for (let key in inputObj) {
    if (typeof inputObj[key] === 'object') {
        for (let nestedKey in inputObj[key]) {
            outputArr.push({ key: nestedKey, value: inputObj[key][nestedKey] });
        }
    } else {
        outputArr.push({ key: key, value: inputObj[key] });
    }
}

console.log(outputArr);
