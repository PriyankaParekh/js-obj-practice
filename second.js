const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: { e: 3 }
    }
};

const obj2 = {
    f: 4,
    b: {
        g: 5,
        d: { h: 6 }
    }
};

function mergeObjects(obj1, obj2) {
    let merged = obj1;

    for (let key in obj2) {
        if (typeof obj2[key] === 'object') {
            if (!(key in obj1)) {
                merged[key] = obj2[key];
            } else {
                merged[key] = mergeObjects(obj1[key], obj2[key]);
            }
        } else {
            merged[key] = obj2[key];
        }
    }

    return merged;
}
const result = mergeObjects(obj1, obj2);
console.log(result);