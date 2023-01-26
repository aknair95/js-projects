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
