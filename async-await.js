//1. Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

async function loadJson(url) {
  let fetchData=await fetch(url);
  if (fetchData.status == 200) {
    let json = await fetchData.json(); 
    return json;
  }

  throw new Error(fetchData.status);
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); 

//2. Rewrite "rethrow" with async/await
// Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

async function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  try{
    let loadjson=await loadJson(`https://api.github.com/users/${name}`);
    if(loadjson){
        alert(`Full name: ${loadjson.name}.`);
    }
  } catch(err){
    if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
  }
  return loadjson;
}

demoGithubUser();

//3. We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    wait().then(res => alert(res));

  }
f();