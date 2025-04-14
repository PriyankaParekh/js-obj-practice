// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.

let promptNum=prompt("Enter Number: ");
let str='';
for (let i=0;i<promptNum.length;i++) {
    curr=promptNum[parseInt(i)];
    next=promptNum[parseInt(i)+1];
    console.log(curr,next);
    if(curr%2==0 && next%2==0 || curr==next){
        str+=curr+'-';
    }else{
        str+=curr+'';
    }
  }
  console.log(str);