let form=document.querySelector('#addexpense');
let expList=document.querySelector('#expenselist');
let exp=document.querySelector('#expense');
let desc=document.getElementById('description');
let cat=document.querySelector('#category');
let sno=document.querySelector('#sNo');

let expData={
    Sno: sno.value, 
    Expense: exp.value,
    Description: desc.value,
    Category: cat.value
}

for([key,value] in localStorage)
{
    let listr=localStorage.getItem(key);
    console.log(key);
    let liobj=JSON.parse(listr);
    let LSstr=liobj.Sno+'-'+liobj.Expense+' '+liobj.Description+' '+liobj.Category;
    let LSstrTag=document.createElement('li');
    LSstrTag.className="list-group-item";
    LSstrTag.id=sno.value;
    expList.appendChild(LSstrTag);
}

form.addEventListener('submit',addItem);
expList.addEventListener('click',deleteItem);
expList.addEventListener('click',editItem);

function addItem(e)
{   
    e.preventDefault();
   
    let expDataString=JSON.stringify(expData);
    localStorage.setItem(sno.value,expDataString);

    let liTag=document.createElement('li');
    liTag.className="list-group-item";
    liTag.id=sno.value;

    let del=document.createElement('button');
    del.className="btn btn-danger btn-sm float-right delete";
    del.style="color: black;";
    btnText=document.createTextNode('Delete Expense');
    del.appendChild(btnText);

    let edit=document.createElement('button');
    edit.className='btn btn-sm float-right edit';
    edit.style='margin-right: 10px;background-color: lightgreen;margin-left: 1%;';
    editText=document.createTextNode('Edit Expense');
    edit.appendChild(editText);

    let liSno=document.createTextNode(sno.value);
    let liTextExp=document.createTextNode(exp.value);
    let liTextDesc=document.createTextNode(desc.value);
    let liTextCat=document.createTextNode(cat.value);
    let gap=document.createTextNode('-');
    let gap1=document.createTextNode(' ');
    let gap2=document.createTextNode(' ');
    
    liTag.appendChild(liSno);
    liTag.appendChild(gap);
    liTag.appendChild(liTextExp);
    liTag.appendChild(gap1);
    liTag.appendChild(liTextDesc);
    liTag.appendChild(gap2);
    liTag.appendChild(liTextCat);
    liTag.appendChild(edit);
    liTag.appendChild(del);

    expList.appendChild(liTag);
    sno.value='';
    exp.value='';
    desc.value='';
    cat.value='';
}

function deleteItem(e1)
{
    if(e1.target.classList.contains('btn-danger'))
    {
        let lidel=e1.target.parentElement;
        expList.removeChild(lidel);
        localStorage.removeItem(lidel.id);
    }
    
}

function editItem(e2)
{   
    if(e2.target.classList.contains('edit'))
    {
        let liedit=e2.target.parentElement;
        expList.removeChild(liedit);

        let LSvalue=localStorage.getItem(liedit.id);
        let LSvalueObj=JSON.parse(LSvalue);

        localStorage.removeItem(liedit.id);
        sno.value=liedit.id;
        exp.value=LSvalueObj.Expense;
        desc.value=LSvalueObj.Description;
        cat.value=LSvalueObj.Category;
          
    }
}




