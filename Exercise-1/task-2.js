function task(n){
    let str='';
    for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(j==1 || j==n || i==1 || i==n){
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