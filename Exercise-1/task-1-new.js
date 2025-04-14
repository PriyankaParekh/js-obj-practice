function task(n) {
    let str='';
        for(i=0 ;i<n*n;i++) {
           const row=Math.floor(i/n);
           const col=i%n; 
           if(row==col || row+col==n-1){
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
    
    task(11)
    