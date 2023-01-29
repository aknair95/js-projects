let form=document.querySelector('#addForm');
let dataList=document.querySelector('#items');
let search=document.getElementById('filter');

form.addEventListener('submit',addItem);

dataList.addEventListener('click',removeItem);

search.addEventListener('keyup',searchItem);

function addItem(e)
{   
    e.preventDefault();
    let inputValue=document.querySelector('#item');
    let inputDescript=document.getElementById('descript');

    let liTag=document.createElement('li');
    liTag.className="list-group-item";

    let liBtn=document.createElement('button');
    liBtn.className="btn btn-danger btn-sm float-right delete";
    liBtn.style="color: black;";
    btnText=document.createTextNode('X');
    liBtn.appendChild(btnText);

    let edit=document.createElement('button');
    edit.className='btn btn-sm float-right edit';
    edit.style='margin-right: 10px;background-color: lightgreen;';
    editText=document.createTextNode('Edit');
    edit.appendChild(editText);
    
    let liTextItem=document.createTextNode(inputValue.value);
    let liTextDescript=document.createTextNode(inputDescript.value);
    let sp=document.createTextNode(' ');
    
    liTag.appendChild(liTextItem);
    liTag.appendChild(sp);
    liTag.appendChild(liTextDescript);
    liTag.appendChild(liBtn);
    liTag.appendChild(edit);

    dataList.appendChild(liTag);
    inputValue.value='';
    inputDescript.value='';
}

function removeItem(e1)
{
    if(e1.target.classList.contains('btn-danger'))
    {
        let li=e1.target.parentElement;
        dataList.removeChild(li);
    }
}

function searchItem(e2)
{
    let filterBar=search.value.toLowerCase();
    let liList=document.querySelectorAll('.list-group-item');
    for(let i=0;i<liList.length;i++)
    {   
        let textLower=liList[i].firstChild.textContent.toLowerCase();
        if(i>3)
        {
            let textLower2=liList[i].childNodes[1].textContent.toLowerCase();
            let textLower3=liList[i].childNodes[2].textContent.toLowerCase();
            let textLower1=textLower+textLower2+textLower3;
            textLower=textLower1;
        }
       
        if(textLower.indexOf(filterBar)>=0)
        {
            liList[i].style.display='block';
        }
        else
        {
            liList[i].style.display='none';
        }
    }
}

let pos1=document.getElementById('addForm');
let pos2=document.getElementById('sub');

let infoTag=document.createElement('input');
infoTag.id='descript';
infoTag.className='form-control mr-2';
infoTag.type='text';
pos1.insertBefore(infoTag,pos2);

