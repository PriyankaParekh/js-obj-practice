let n = 7; 
let loop;
if(n%2==0){
    loop=n/2;
}else{
    loop=(n/2)+1;
}
for (let i=1; i <=loop; i++) { 
    let str = ''
  
    for (let j = 1; j <= 2 * n; ++j) { 
        if (i + j == n + 1 || (i == j - n + 1)) { 
            str += '*'
        } 
        else
            str += ' '
    } 
  
    console.log(str); 
} 
let i;
if(n%2==0){
    i=n/2;
}else{
    i=(n-1)/2;
}
for (; i >= 1; i--) { 
    let str = ''
    for (let j = 1; j <= 2 * n; ++j) { 
        if (i + j == n + 1 || (i == j - n + 1)) 
            str += '*'
        else
            str += ' '
    } 
      
    console.log(str); 
}