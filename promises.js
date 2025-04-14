//1. What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); //1

//2. The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("fullfiled"), ms);
      })
}

delay(3000).then(() => alert('runs after 3 seconds'));

//3. Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

function showCircle(a,b,c) {
    return new Promise((resolve, reject) => {
        let div=document.createElement("div");
        document.body.append(div);
        resolve(div);
      })
}

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});