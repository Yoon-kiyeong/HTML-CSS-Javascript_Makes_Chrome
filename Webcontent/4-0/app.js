// const loginForm = document.getElementById("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
//document 또는 하나의 element를 통해서 검색이 가능하다. 오직 한 element에서 찾을 수 있다.

function handleLoginBtnClick() {
    console.log(loginInput.value);    
}

loginButton.addEventListener("click",handleLoginBtnClick);