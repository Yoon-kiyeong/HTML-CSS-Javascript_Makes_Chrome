const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    // if(username === "") {
    //     console.log("Please write your name");
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long");
    // }
    console.log(username);
}

loginButton.addEventListener("click",onLoginBtnClick);