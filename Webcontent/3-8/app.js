const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const clickedClass = "clicked"; 
    
    // if(h1.classList.contains(clickedClass)) {   //여기서 우리가 하는건, HTML element가 가지고 있는 또 하나의 요소를 사용하는 것, classList가 clicked를 포함하고 있는지만을 확인하는것
    //     h1.classList.remove(clickedClass);      //만약에 clickedClass가 h1의 classList에 포함되어 있지 않다면
    // } else {
    //     h1.classList.add(clickedClass);         //clickedClass를 추가함
    // }

    //className을 바꾸는 다른 방법, 그 방법은 classList를 사용하는 방법
    //classList는 말 그대로, class들의 목록으로 작업할 수 있게끔 허용해줌
    //왜냐하면 className은 그냥 모든걸 교체해버림, 이전에 class들은 상관하지 않고 교체함 classList에서는 이걸 조금 다르게 할 수 있음
    
    h1.classList.toggle("clicked");             //이 String을 반복하는 순간, 그때가 constant를 생성할 순간
}

h1.addEventListener("click", handleTitleClick);

//1. constains(function)
//이 function은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해줌

//2. toggle(function)
//className이 존재하는지 확인을 함
//만약 className이 존재한다면 toggle은 className을 제거함