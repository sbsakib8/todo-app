const todoForm = document.querySelector('.todo_form');
const todoInput = document.querySelector('.todo_input');
const searchInput = document.querySelector('.search_input');
const todoOutput = document.querySelector('.todo_output');

// addtodo item start
const addTodo =(e)=>{
    e.preventDefault();
    let todo = todoInput.value;
    if(todo){
     const id = Date.now();
     addTodoToLocalStorage({id,todo,completed:false});
     const todoItem = document.createElement('div');
     todoItem.classList = `todo_item ${id}`;
     todoItem.innerHTML = `
     <input type="checkbox" class= "todo_check">
     <input type= "text" class="todo_text" value=${todo} disabled>
     <button class="todo_edit">Edit</button>
     <button class="todo_delete">Delete</button>
     `;
     todoOutput.prepend(todoItem);
     todoInput.value = "";
    }

};

const addTodoToLocalStorage = (todo)=>{
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(!tasks){
       tasks = [];
    }
    tasks.push(todo);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

const getTodo =(e)=>{
    let tasks = localStorage.getItem("tasks");
    if(tasks){
     tasks =JSON.parse(tasks);
     tasks.forEach((task)=>{
        const todoItem = document.createElement('div');
     todoItem.classList = `todo_item ${task.id}`;
     todoItem.innerHTML = `
     <input type="checkbox" class= "todo_check" ${task.completed?"checked":""}>
     <input type= "text" class="todo_text ${task.completed ? "strike": ""}" value=${task.todo} disabled>
     <button class="todo_edit">Edit</button>
     <button class="todo_delete">Delete</button>
     `;
     todoOutput.prepend(todoItem);
     })
    }
};
// addtodo item start