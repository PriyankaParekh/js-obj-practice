let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let row = arr.length;
  let col = arr[0].length;
  let matrix = new Array(col).fill(0).map(() => new Array(row).fill(0));
  let filted;
  function transformArr(array,angle) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if(angle==90){
          matrix[j][row - 1 - i] = array[i][j];
        }
        else if(angle==180){
          matrix[row-1-i][col - 1 - j] = array[i][j];
        } 
        else if(angle==270){
          matrix[col-1-j][i]=array[i][j];
        } else if(angle==360 || angle==0){
          matrix[i][j]=array[i][j];
        } else{
          console.log('enter valid angle');
          return;
        }
      }
    }
  
    return matrix;
  }
  let mat = transformArr(arr,43);
  console.log(mat);
  