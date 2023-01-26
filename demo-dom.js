let header=document.getElementById('main-header');
header.style.borderBottom='solid black 2px';

let title=document.querySelector('.title');
title.style.fontWeight='bold';
title.style.color='green';

let element=document.querySelectorAll('.list-group-item');
element[2].style.background='green';

let elementall=document.querySelectorAll('.list-group-item');
for(let i=0;i<elementall.length;i++)
{
    elementall[i].style.fontWeight='bold';
    elementall[i].style.color='blue';
}