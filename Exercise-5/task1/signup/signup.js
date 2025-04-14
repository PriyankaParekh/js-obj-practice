let arr=[];

function submitresult() {
    let obj={
        name: document.form.name.value,
        email: document.form.email.value,
        role: document.form.role.value,
        password: document.form.password.value
    };
    let arr = JSON.parse(localStorage.getItem('users')) || [];
    console.log(obj);
    let existingUser = arr.find(user => (user.email === obj.email) );
    console.log(existingUser);
    if(existingUser){
        alert("Email Already Present")
        window.location.reload();
    } else{
        arr.push(obj);
        localStorage.setItem('users',JSON.stringify(arr));
        window.location.href='../signin/signin.html'
    }



}