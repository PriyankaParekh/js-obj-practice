let arr = [1, 2, 3, 4, 5];
let newArr = [];
let sum = 0;
function main(arr) {
  for (let i = 0; i < arr.length + 1; i++) {
    if (i == arr.length) {
      sum = arr[i];
    } else {
      sum = arr[i] + arr[i + 1];
    }
    newArr.push(sum);
  }
  if (newArr.length == 1) {
    return newArr[0];
  } else {
    return main(newArr);
  }
}

main(arr);
