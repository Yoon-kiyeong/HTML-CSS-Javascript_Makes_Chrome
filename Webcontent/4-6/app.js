const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
//username을 인자로 받는 함수를 만들었다

loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    //만약 유저정보가 local storage에 없다면 local storage는 null 값을 반환할 것
    //그래서 만약 savedUsername 값이 null이라면 form의 hidden class명을 지워줄 것이다.
    //왜냐하면 지금은 form이랑 h1 모두 hidden이라는 class를 가지고 시작하기 때문
    //show the form
} else {
    paintGreetings(savedUsername);
    //먼저 greeting 안에 텍스트를 추가하고, 그런 다음 greeting한테서 HIDDEN_CLASSNAME을 제거해 준다.
    //show the greetings
}

console.log(savedUsername);