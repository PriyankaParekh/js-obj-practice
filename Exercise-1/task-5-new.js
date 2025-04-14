function stars(n){
  var str = '';
  const mid=Math.floor(n*2);
  const space=" ";

for(let row=0;row<2*n-1;row++){
for(let col=0;col<n;col++){
  if(col>=row && col<n+row){
  str+=(col+1)+ ' ';
  }
  
  else if(col<=row-n+1 && row!=n-1){
    str+=(n-col)+' ';
  } else if(col<=n-row && col<n){
    str+=' ';
  }
  else{
  str+=" ";
  }
}
console.log(str);
str = "";
}
}
stars(5);