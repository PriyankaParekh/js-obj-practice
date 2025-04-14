function task(n){
    let str='';
    for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(j==i || i+j==n+1){
            str+= "*";
        } else{
            str+=" ";
        }
    }
    console.log(str);
    str='';
}
    
}
task(4);