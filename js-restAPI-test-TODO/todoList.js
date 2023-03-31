let todoName=document.getElementById("todo");
let description=document.getElementById("descript");
let addItem=document.getElementById("todoForm");
let todoList1=document.getElementById("todoList1");
let todoList2=document.getElementById("todoList2");


addItem.addEventListener('submit',addTodo);
window.addEventListener("DOMContentLoaded",reload);
todoList1.addEventListener("click",removeTodo);
todoList1.addEventListener("click",doneTodo);

function addTodo(e)
{   
    e.preventDefault();
    let todoObj={
        TodoName: todoName.value,
        Description: description.value
    };

    axios.post("https://crudcrud.com/api/40593fa1b4e04828898140e0f2d30520/todos",todoObj)
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err));

    let liTag1=document.createElement("li");
    liTag1.id=todoObj._id;
    liTag1.className="list-group-item";
    let liText1=document.createTextNode(`Todo Name-${todoName.value} Description-${description.value}`);

    doneBtn=document.createElement("input");
    doneBtn.type='button';
    doneBtn.id="okBtn";
    doneBtn.className="done-btn";
    doneBtn.value="DONE";

    delBtn=document.createElement("input");
    delBtn.type="button";
    delBtn.id="delBtn";
    delBtn.className="delete-btn";
    delBtn.value="DELETE";

    liTag1.appendChild(liText1);
    liTag1.appendChild(doneBtn);
    liTag1.appendChild(delBtn);
    todoList1.appendChild(liTag1);

    todoName.value="";
    description.value="";

}

function reload(e1)
{
    axios.get("https://crudcrud.com/api/40593fa1b4e04828898140e0f2d30520/todos")
    .then((res)=> {
        for(let i=0;i<res.data.length;i++)
        {
            showTodoList(res.data[i]);
        }
    })
    .catch((err)=> console.log(err));
     
}

function showTodoList(todoData)
{
    let liTag1=document.createElement("li");
    liTag1.id=todoData._id;
    liTag1.className="list-group-item";
    let liText1=document.createTextNode(`Todo Name-${todoData.TodoName} Description-${todoData.Description}`);

    doneBtn=document.createElement("input");
    doneBtn.type='button';
    doneBtn.id="okBtn";
    doneBtn.className="done-btn";
    doneBtn.value="DONE";

    delBtn=document.createElement("input");
    delBtn.type="button";
    delBtn.id="delBtn";
    delBtn.className="delete-btn";
    delBtn.value="DELETE";

    liTag1.appendChild(liText1);
    liTag1.appendChild(doneBtn);
    liTag1.appendChild(delBtn);
    todoList1.appendChild(liTag1);
}
function removeTodo(e2)
{   
    if(e2.target.classList.contains('delete-btn'))
    {
        let delLi=e2.target.parentElement;
        axios.delete(`https://crudcrud.com/api/40593fa1b4e04828898140e0f2d30520/todos/${delLi.id}`)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err));
          
        todoList1.removeChild(delLi);    
    }  
}

function doneTodo(e3)
{
    if(e3.target.classList.contains('done-btn'))
    {   
        let doneLi=e3.target.parentElement;
        doneLi.removeChild(e3.target);
        todoList2.appendChild(doneLi);
        todoList1.removeChild(doneLi); 
    }
   
}