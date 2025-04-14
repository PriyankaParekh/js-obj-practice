function deepcopy(obj) {
  let obj2 = {};
  start: for (key in obj) {
    if (typeof key === "object") {
      break start;
    } else {
      obj2[key]=obj[key];
    }
  }
  return obj2;
}

obj = {
  name: "John",
  email: "john@gmail.com",
  permissions: {
    canView: true,
    canDelete: false,
    canModify: {
      user: true,
      other: false,
    },
  },
};
let obj1 = deepcopy(obj);
console.log(obj1);

obj1.name="pri";
obj1.permissions.canDelete="pri";
console.log(obj1);
console.log(obj);