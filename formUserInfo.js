let userName=document.getElementById('nameInput');
let userEmail=document.getElementById('emailInput');
let userMobileNo=document.getElementById('mobileNo');
let userform=document.getElementById('addform');
let userlist=document.getElementById('userInfoList');

userform.addEventListener('submit',storeList);

function storeList(e)
{   
    e.preventDefault();
    let userData={
        Name: userName.value,
        Email: userEmail.value,
        MobileNo : userMobileNo.value
    }
    let UserDataString=JSON.stringify(userData);
    localStorage.setItem(userMobileNo.value,UserDataString);
    let liTag=document.createElement('li');
    liTag.className='list-group-item';
    let liText=document.createTextNode(`Name-${userName.value} EmailID-${userEmail.value} Mobile No-${userMobileNo.value}`);
    liTag.appendChild(liText);
    userlist.appendChild(liTag);
    userName.value='';
    userEmail.value='';
    userMobileNo.value='';
}