const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사하는 것 그 다음에 뭘 하든 newTodo와는 관련 없음
    console.log(toDoInput.value);
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);