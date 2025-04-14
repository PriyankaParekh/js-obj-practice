function task(n) {
    let str='';
        for(i=0 ;i<n*n;i++) {
           const row=Math.floor(i/n);
           const col=i%n; 
        //    const mid=Math.floor(n/2);
           
           if(col==row || col+row<n){
             str+='*';
           } else{
             str+=' ';
           }
           
           if((i+1)%n==0){ 
             console.log(str);
            str='';
           }
        }
    }
    
    task(9)
    