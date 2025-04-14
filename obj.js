//1. Write the code, one line for each action:

// Create an empty object user.
let obj={};
// Add the property name with the value John.
obj.name='John';
// Add the property surname with the value Smith.
obj.surname='Smith';
// Change the value of the name to Pete.
obj.name='Pete'
// Remove the property name from the object.
delete obj.name;

//2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(schedule){
    for(key in schedule){
        return false;
    } 
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//3. We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

//   Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
  
//   If salaries is empty, then the result must be 0.

let values=Object.values(salaries);
let sum=0;
alert(values);

for(let i=0;i<values.length;i++){
    sum+=values[i];
}
alert(sum);

//4.Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(menu){
    for(key in menu){
        if(typeof menu[key]=="number"){
        menu[key]=menu[key]*2;}
    }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.


// OBJECT METHODS TASKS

//1. Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

//2. There’s a ladder object that allows to go up and down:

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); 

//3. Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
let calculator = {
    a:0,
    b:0,
  read(){
    this.a=+prompt("Enter 1 value: ",0);
    this.b=+prompt("Enter 2 value: ",0);
    return this.a,this.b;
  },
  sum(){
    return this.a+this.b;
  },
  mul(){
    let result=this.a*this.b;
    return result;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );