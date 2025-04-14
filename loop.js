//1. 
let i = 3;

while (i) {
  alert( i-- ); // prints 3 2 1, so last one is 1
}

// 2.
let j = 0;
while (++j < 5) alert( j ); //prints 1 2 3 4

let k = 0;
while (k++ < 5) alert( k ); //prints 0 1 2 3 4

// 3.
for (let i = 0; i < 5; i++) alert( i ); //prints 0 to 4

for (let i = 0; i < 5; ++i) alert( i ); //prints 1 to 4

// 4. Use the for loop to output even numbers from 2 to 10.

for(let x=1;x=x%2;x++){
    alert(x);
}   

// 5.
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

// 6.

let promptval=prompt("enter value: ");
while(promptval){
 promptval=prompt("enter value: ");
}

// 7.
let p=prompt("enter value: ");

prime:
for(let i=2;i<=p;i++){
    for(let j=2;j<i;j++){
        if(i%j==0) continue prime;
    }
    alert(i);
}
