const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    // if(h1.className === "active") {     //부호가 세개라면, className이 active와 같은지 확인하는 것
    if(h1.className === clickedClass) {
        h1.className = "";              //부호가 하나라면, 해당 값을 이 값으로 변경해 주는 것
    } else {
        // h1.className = "active";        //"active"라는 String을 두 번 사용하고 있는데 이것들은 error의 위험이 있다.
        h1.className = clickedClass;
    }
    //getter이면서 setter
}

h1.addEventListener("click", handleTitleClick);