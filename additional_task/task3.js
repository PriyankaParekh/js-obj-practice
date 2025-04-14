let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let row = arr.length;
let col = arr[0].length;
let filted;
function degree45(array) {
    let matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));
    let newRow = 0;
    let newCol = 0;
    for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i == 1 && j == 0) {
          newRow = Math.floor((i + j) / 2);
          newCol = Math.floor((j - i + 2) / 2);
        } else if (i == 0 && j == 1) {
          newRow = Math.floor((i + j) / 2);
          newCol = Math.ceil((j - i + 2) / 2);
        } else if (i == 2 && j == 1) {
          newRow = Math.ceil((i + j) / 2);
          newCol = Math.floor((j - i + 2) / 2);
        } else {
          newRow = Math.ceil((i + j) / 2);
          newCol = Math.ceil((j - i + 2) / 2);
        }
        matrix[newRow][newCol] = array[i][j];
      }
    }
    return matrix;
  }


// let mat = degree45(arr);
angle=90;
switch (angle) {
    case 45:
        let ans=degree45(arr);
        console.log(ans);
        break;
    case 90:
        let ans2=degree45(degree45(arr));
        console.log(ans2);
        break;
    case 135:
        let ans3=degree45(degree45(degree45(arr)));
        console.log(ans3);
        break;
    case 180:
        let ans4=degree45(degree45(degree45(degree45(arr))));
        console.log(ans4);
        break;
    case 225:
        let ans5=degree45(degree45(degree45(degree45(degree45(arr)))));
        console.log(ans5);
        break;
    case 270:
        let ans6=degree45(degree45(degree45(degree45(degree45(degree45(arr))))));
        console.log(ans6);
        break;
    case 315:
        let ans7=degree45(degree45(degree45(degree45(degree45(degree45(degree45(arr)))))));
        console.log(ans7);
        break;
    case 360:
        console.log(arr);
    default:
        console.log("Enter valid input");
        break;
}
// console.log();
