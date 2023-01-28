let form=document.querySelector('#addForm');
let dataList=document.querySelector('#items');

form.addEventListener('submit',addItem);

dataList.addEventListener('click',removeItem);

function addItem(e)
{   
    e.preventDefault();
    let inputValue=document.querySelector('#item');
    
    let liTag=document.createElement('li');
    liTag.className="list-group-item";

    let liBtn=document.createElement('button');
    liBtn.className="btn btn-danger btn-sm float-right delete";
    btnText=document.createTextNode('X');
    liBtn.appendChild(btnText);

    let edit=document.createElement('button');
    edit.className='btn float-right edit';
    editText=document.createTextNode('Edit');
    edit.appendChild(editText);
    console.log(edit);
    
    let liText=document.createTextNode(inputValue.value);
    liTag.appendChild(liText);
    liTag.appendChild(liBtn);
    liTag.appendChild(edit);

    dataList.appendChild(liTag);
    inputValue.value='';
    
}

function removeItem(e1)
{
    if(e1.target.classList.contains('btn-danger'))
    {
        let li=e1.target.parentElement;
        dataList.removeChild(li);
    }
}