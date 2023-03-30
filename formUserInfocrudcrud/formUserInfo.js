let userName=document.getElementById('nameInput');
let userEmail=document.getElementById('emailInput');
let userMobileNo=document.getElementById('mobileNo');
let userform=document.getElementById('addform');
let userlist=document.getElementById('userInfoList');
let infoUpdate=document.getElementById('Ubtn');

userform.addEventListener('submit',storeList);
userlist.addEventListener('click',remove);
userlist.addEventListener('click',edit);
window.addEventListener('DOMContentLoaded',reload);
infoUpdate.addEventListener('click',update);

let objId;

function storeList(e)
{   
    e.preventDefault();
    let userData={
        Name: userName.value,
        Email: userEmail.value,
        MobileNo: userMobileNo.value
    }
    
    axios.post("https://crudcrud.com/api/e6bad12ef54848a48a79919c15827503/userInfo",userData)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err));
    
    let liTag=document.createElement('li');
    liTag.className='list-group-item';
    liTag.id=userData._id;
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
        axios.delete(`https://crudcrud.com/api/e6bad12ef54848a48a79919c15827503/userInfo/${delLi.id}`)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err));
        userlist.removeChild(delLi);
      
    }  
}

function edit(e2)
{
    if(e2.target.classList.contains('edit-btn'))
    {
        let editLi=e2.target.parentElement;

        axios.get(`https://crudcrud.com/api/e6bad12ef54848a48a79919c15827503/userInfo/${editLi.id}`)
        .then((res)=> {
        console.log(res);
        fillUserInfo(res.data);   
        })
        .catch((err)=> console.log(err));

        userlist.removeChild(editLi);
    }
}

function reload(e3)
{
    axios.get("https://crudcrud.com/api/e6bad12ef54848a48a79919c15827503/userInfo")
    .then((res)=> {
        console.log(res);
        for(let i=0;i<res.data.length;i++)
        {
            showUserInfo(res.data[i]);
        }
    })
    .catch((err)=> console.log(err));
     
}

function showUserInfo(userInfo)
{
    let liTag=document.createElement('li');
    liTag.className='list-group-item';
    liTag.id=userInfo._id;
    let liText=document.createTextNode(`Name-${userInfo.Name} EmailID-${userInfo.Email} Mobile No-${userInfo.MobileNo}`);

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
}

function fillUserInfo(preFillInfo)
{
    userName.value=preFillInfo.Name;
    userEmail.value=preFillInfo.Email;
    userMobileNo.value=preFillInfo.MobileNo;
    objId=preFillInfo._id;

}
function update(e4)
{   
    let updateUserData={
        Name: userName.value,
        Email: userEmail.value,
        MobileNo: userMobileNo.value
    };

    axios.put(`https://crudcrud.com/api/e6bad12ef54848a48a79919c15827503/userInfo/${objId}`,updateUserData)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err));
    
    let liTag=document.createElement('li');
    liTag.className='list-group-item';
    liTag.id=objId.value;
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

