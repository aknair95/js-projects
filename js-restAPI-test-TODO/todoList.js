// fetching dom target points

let todoName=document.getElementById("todo");
let description=document.getElementById("descript");
let addItem=document.getElementById("todoForm");
let todoList1=document.getElementById("todoList1");
let todoList2=document.getElementById("todoList2");

// creating event listners for all events

addItem.addEventListener('submit',addTodo);
window.addEventListener("DOMContentLoaded",reload);
todoList1.addEventListener("click",removeTodoRemain);
todoList2.addEventListener("click",removeTodoDone);
todoList1.addEventListener("click",doneTodo);


async function addTodo(e)                           // to enlist todo's in the remaining todo's list
{   
    e.preventDefault();
    let todoObj={
        TodoName: todoName.value,
        Description: description.value,
        status: "pending"
    };

    try{
        const res= await axios.post("https://crudcrud.com/api/c3e062260ebd46d0a3eaf1595794f120/todos",todoObj);
        console.log(res);
    }catch(err){        
        console.log(err);
    }

    let liTag1=document.createElement("li");           // creating li HTML tag
    liTag1.id=todoObj._id;
    liTag1.className="list-group-item";
    liTag1.setAttribute("status","pending");
    let liText1=document.createTextNode(`Todo Name-${todoName.value} Description-${description.value}`);

    doneBtn=document.createElement("input");            // creating done button
    doneBtn.type='button';
    doneBtn.id="okBtn";
    doneBtn.className="done-btn";
    doneBtn.value="DONE";

    delBtn=document.createElement("input");             // creating delete button
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

async function reload(e1)                          // to fetch data from endpoints and enlist when refreshed/reloaded
{
    try{
        const res= await axios.get("https://crudcrud.com/api/c3e062260ebd46d0a3eaf1595794f120/todos");
        for(let i=0;i<res.data.length;i++)
        {
            showTodoList(res.data[i]);
        }
    }
    catch(err){
        console.log(err);
    }
     
}

function showTodoList(todoData)                         // function called in reload() function
{
    let liTag=document.createElement("li");
    liTag.id=todoData._id;
    liTag.className="list-group-item";
    let liText=document.createTextNode(`Todo Name-${todoData.TodoName} Description-${todoData.Description}`);

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

    liTag.appendChild(liText);
    liTag.appendChild(doneBtn);
    liTag.appendChild(delBtn);

    if(todoData.status==="pending")                     // for checking data to be enlisted in remaining or done todo's list
    {
        todoList1.appendChild(liTag);
    }
    else{
        liTag.removeChild(doneBtn);
        todoList2.appendChild(liTag);
    }
    
}
async function removeTodoRemain(e2)                     // to delete todo's from remaining todo's list
{   
    if(e2.target.classList.contains('delete-btn'))
    {
        let delLi=e2.target.parentElement;
        try{
            const res=await axios.delete(`https://crudcrud.com/api/c3e062260ebd46d0a3eaf1595794f120/todos/${delLi.id}`);
            console.log(res);
        }
        catch(err){
            console.log(err);
        } 
        todoList1.removeChild(delLi);    
    }  
}

async function removeTodoDone(e3)                      // to delete todo's from done todo's list
{   
    if(e3.target.classList.contains('delete-btn'))
    {
        let delLi=e3.target.parentElement;
        try{
            const res=await axios.delete(`https://crudcrud.com/api/c3e062260ebd46d0a3eaf1595794f120/todos/${delLi.id}`);
            console.log(res);
        }
        catch(err){
            console.log(err);
        }   
        todoList2.removeChild(delLi);    
    }  
}

async function doneTodo(e4)                             // to move todo's from remaining todo's list to done todo's list
{
    if(e4.target.classList.contains('done-btn'))
    {   
        let todoObj1={
            TodoName: "",
            Description: "",
            status: "done"
        } 

        let doneLi=e4.target.parentElement;
        doneLi.status="done";

        try{
            const res1=await axios.get(`https://crudcrud.com/api/c3e062260ebd46d0a3eaf1595794f120/todos/${doneLi.id}`);
            console.log(res1.data);
            todoObj1={
                TodoName: res1.data.TodoName,
                Description: res1.data.Description,
            }
        }
        catch(err){
            console.log(err);
        }

        try{
            const res2=await axios.put(`https://crudcrud.com/api/c3e062260ebd46d0a3eaf1595794f120/todos/${doneLi.id}`,todoObj1);
            console.log(res2);
        }
        catch(err)
        {
            console.log(err);
        }

        doneLi.removeChild(e4.target);
        todoList1.removeChild(doneLi); 
        todoList2.appendChild(doneLi);
       
    }
   
}