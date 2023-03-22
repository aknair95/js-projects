let userName=document.getElementById('nameInput');
let userEmail=document.getElementById('emailInput');
let userMobileNo=document.getElementById('mobileNo');
let userform=document.getElementById('addform');
let userlist=document.getElementById('userInfoList');

userform.addEventListener('submit',storeList);
userlist.addEventListener('click',remove);
userlist.addEventListener('click',edit);

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
    liTag.id=userMobileNo.value;
    let liText=document.createTextNode(`Name-${userName.value} EmailID-${userEmail.value} Mobile No-${userMobileNo.value}`);

    let edit=document.createElement('input');
    edit.type='button';
    edit.className='edit-btn';
    edit.value='Edit';

    let del=document.createElement('input');
    del.type='button';
    del.className='del-btn';
    del.value='Delete';

    liTag.appendChild(liText);
    liTag.appendChild(edit);
    liTag.appendChild(del);
    userlist.appendChild(liTag);
    
    userName.value='';
    userEmail.value='';
    userMobileNo.value='';
}

function remove(e1)
{   
    if(e1.target.classList.contains('del-btn'))
    {
        let delLi=e1.target.parentElement;
        userlist.removeChild(delLi);
        localStorage.removeItem(delLi.id);
    }  
}

function edit(e2)
{
    if(e2.target.classList.contains('edit-btn'))
    {
        let editLi=e2.target.parentElement;
        userlist.removeChild(editLi);
        let LSData=localStorage.getItem(editLi.id);
        let LSDataObj=JSON.parse(LSData);
        localStorage.removeItem(editLi.id);
        userName.value=LSDataObj.Name;
        userEmail.value=LSDataObj.Email;
        userMobileNo.value=LSDataObj.MobileNo;
    }

}