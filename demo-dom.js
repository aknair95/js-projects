/*
let header=document.getElementById('main-header');
header.style.borderBottom='solid black 2px';

let title=document.querySelector('.title');
title.style.fontWeight='bold';
title.style.color='green';

let element=document.querySelector('.list-group-item:nth-child(2)');
element.style.backgroundColor='lightgreen';

let elementall=document.querySelectorAll('.list-group-item');
for(let i=0;i<elementall.length;i++)
{
    elementall[i].style.fontWeight='bold';
    elementall[i].style.color='blue';
}
let li=document.getElementsByTagName('li');
li[4].style.color='red';
li[4].style.fontWeight='bold';
li[4].style.backgroundColor='#ccc'

let item3=document.querySelector('.list-group-item:nth-child(3)');
item3.textContent='';

let item2=document.querySelectorAll('.list-group-item');
item2[1].style.color='green';

let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}
*/

//parentnode
    let parent=document.getElementById('items');
    console.log(parent.parentNode);
    parent.parentNode.style.backgroundColor='#ccc';

//parentelement
    let parent=document.getElementById('items');
    console.log(parent.parentElement);
    parent.parentElement.style.backgroundColor='#ccc';
//childnodes
    let child=document.getElementById('items');
    console.log(child.childNodes);
    child.childNodes[5].style.backgroundColor='yellow';
//children
    let child1=document.getElementById('items');
    console.log(child1.children);
    child1.children[3].style.backgroundColor="yellow";
 //firstchild
    console.log(child1.firstChild);
 //firstelementchild
    console.log(child1.firstElementChild);
    child1.firstElementChild.style.fontSize='20px';
 //lastchild
    console.log(child1.lastChild); 
 //lastelementchild
    console.log(child1.lastElementChild);
    child1.lastElementChild.style.fontSize='25px';
 //nextsibling
    console.log(child1.nextSibling);
 //nextelementsibling
    let nextsib=document.querySelector('.list-group-item');   
    nextsib.nextElementSibling.style.fontWeight='bold';
 //previoussibling
    let prevsib=document.querySelector('.form-inline');
 //previouselementsibling   
    prevsib.previousElementSibling.textContent='ADD ITEMS -';
  
 //creatingelement
    let newli=document.createElement('div');
    newli.id='newli';
    newli.className='list';
    newli.setAttribute('title','newlist');
 //createtextnode   
    let textnode=document.createTextNode('Hello');
 //connecting element & textnode   
    newli.appendChild(textnode);
    console.log(newli); 
    
 //adding hello before item lister
    let pos1=document.querySelector('.container');
    let pos2=document.querySelector('h1'); 
    pos1.insertBefore(newli,pos2);
    newli.style.color='black';
    newli.style.backgroundColor='lightblue'
  
 //adding hello before item 1

    let newli1=document.createElement('div');
    newli1.id='newli1';
    newli1.className='list-group-item';
    newli1.setAttribute('title','newlist');
    let textnode1=document.createTextNode('Hello');  
    newli1.appendChild(textnode1);
    console.log(newli1);

    let pos3=document.querySelector('.list-group');
    let pos4=document.querySelector('.list-group-item');
    pos3.insertBefore(newli1,pos4);
      