// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

// 1. 
function sumFor(n) { 
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
 }

alert( sumFor(100) ); // 5050

//2. 

function sumRec(n) { 
    if(n==1){
        return n;
    }else{
        return n+sumRec(n-1);
    }
 }

alert( sumRec(100) ); // 5050

//3. 
function sumFormula(n) { 
    let sum=(n*(n+1))/2;
    return sum;
 }

alert( sumFormula(100) ); // 5050


//2. The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// The task is to write a function factorial(n) that calculates n! using recursive calls.

function fact(n) { 
    if(n==1){
        return n;
    }else{
        return n*fact(n-1);
    }
 }

alert( fact(5) ); // 5050
