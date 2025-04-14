function task(n){
    let str='';
    let max=Math.ceil(n/2);
    for(let i=1;i<=max;i++){
    for(let j=1;j<=i;j++){
      
        str+='*';
    }
    console.log(str);
    str='';
}
  for(let i=max-1;i>=1;i--){
    for(let j=1;j<=i;j++){
        str+='*';
    }
    console.log(str);
    str='';
 }
 
 
    
}
task(9);