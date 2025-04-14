// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ that​ ​ creates​ ​ a ​ ​ table,​ ​ by accepting​ ​ row and ​ column​ ​ numbers​ ​ from​ ​ the user,​ ​ and​ ​input​s ​ row-column​ ​ number​ ​ as​ ​ content​ ​ (e.g.​ ​ Row-0​ ​ Column-0)​ ​ of​ ​ a ​ ​ cell.

let row = +prompt("Enter row count: ");
let col = +prompt("Enter column count:");

function tablefunc(row, col) {
  if (row == 0 || col == 0) {
    alert("Enter valid count");
    return;
  } else {
    let arr = new Array(row).fill(0).map(() => new Array(col).fill(0));

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        arr[i][j] = `Row-${i} Column-${j}`;
      }
    }

    console.table(arr);
  }
}

tablefunc(row, col);
