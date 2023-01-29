let userName=document.getElementById('nameInput');
let userEmail=document.getElementById('emailInput');
let userform=document.getElementById('addform');

userform.addEventListener('submit',store);

function store(e)
{
    localStorage.setItem('Name',userName.value);
    localStorage.setItem('Email',userEmail.value);
}