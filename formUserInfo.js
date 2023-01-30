let userName=document.getElementById('nameInput');
let userEmail=document.getElementById('emailInput');
let userform=document.getElementById('addform');

userform.addEventListener('submit',store);

function store(e)
{
    let userData={
        Name: userName.value,
        Email: userEmail.value
    }
    let UserDataString=JSON.stringify(userData);
    localStorage.setItem('UserData',UserDataString);
}