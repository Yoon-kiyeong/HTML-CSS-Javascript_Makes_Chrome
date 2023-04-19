const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit);
//form을 submit할 때 입력값을 받아내는 것
//우린 function이 바로 실행되는걸 원하지 않는다.

