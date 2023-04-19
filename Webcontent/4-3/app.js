const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
//     // alert("clicked"); //alert은 모든 동작들을 막는다. 그래서 아무도 alert을 사용하지 않는다.
// }

loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

