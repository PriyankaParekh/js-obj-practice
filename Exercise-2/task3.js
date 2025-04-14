// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​frequent​ ​ item​ ​ of​ ​ an​ ​ array.

let arr = [0,1,1,2,3,4,5,5,5,6,7,7,8,9]
let cnt=0;
let newarr = new Array(arr.length).fill(0);

for(let i=0;i<arr.length;i++){
    let element=arr[i];
    if(arr[element]){
        newarr[element]++;
    }
}
let max=Math.max(...newarr);
console.log(newarr.indexOf(max));

//2 way
//const givenArray = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];

// const maxValue = givenArray.reduce((previous, current,_, arr) => {
//     if (
//       arr.filter((item) => item === previous).length >
//       arr.filter((item) => item === current).length
//     ) {
//       return previous;
//     } else {
//       return current;
//     }
//   });
  
//   console.log(`Element with highest frequency: ${maxValue}`);