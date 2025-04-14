let promptNum=prompt("Enter Number: ");
let str='';
for (let i=0;i<promptNum.length;i++) {
    curr=promptNum[parseInt(i)];
    next=promptNum[parseInt(i)+1];
    if(curr==curr.toUpperCase() && next==next.toLowerCase()){
        str+='-'+curr+'-';
    } else{
        str+=curr+'';
    }
    console.log(curr,next);
  }
  console.log(str);