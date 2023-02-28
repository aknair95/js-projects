let form=document.querySelector('#addexpense');
let expList=document.querySelector('#expenselist');

form.addEventListener('submit',addItem);
expList.addEventListener('click',removeItem);
expList.addEventListener('click',editItem);
function addItem(e)
{   
    e.preventDefault();
    let exp=document.querySelector('#expense');
    let desc=document.getElementById('description');
    let cat=document.querySelector('#category');

    let liTag=document.createElement('li');
    liTag.className="list-group-item";

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
    
    let liTextExp=document.createTextNode(exp.value);
    let liTextDesc=document.createTextNode(desc.value);
    let liTextCat=document.createTextNode(cat.value);
    let gap=document.createTextNode(' ');
    let gap1=document.createTextNode(' ');
    
    liTag.appendChild(liTextExp);
    liTag.appendChild(gap);
    liTag.appendChild(liTextDesc);
    liTag.appendChild(gap1);
    liTag.appendChild(liTextCat);
    liTag.appendChild(edit);
    liTag.appendChild(del);

    expList.appendChild(liTag);
    exp.value='';
    desc.value='';
    cat.value='';
}

function removeItem(e1)
{
    if(e1.target.classList.contains('btn-danger'))
    {
        let li=e1.target.parentElement;
        expList.removeChild(li);
    }
}

function editItem(e2)
{
    let exp1=document.querySelector('#expense');
    let desc1=document.getElementById('description');
    let cat1=document.querySelector('#category');
    exp1.value=exp1.value;
    desc1.value='';
    cat1.value='';
}

}


