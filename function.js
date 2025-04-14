// 1. 
function checkAge(age){
    age=age>18?true: confirm('Did parents allow you?');
}
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

// 2.

function min(x,y){
    return x<y?x:y;
}
min(2,5);
min(3,-1);
min(1,1);

// 3. 
pow(3, 2);
function pow(x,y){
    let res=x;
    for(let i=1;i<y;i++){
        res=res*x;
    }
    return res;
}