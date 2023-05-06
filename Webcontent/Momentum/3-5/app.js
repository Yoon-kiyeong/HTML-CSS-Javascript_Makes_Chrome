const title = document.querySelector(".hello:first-child h1");

// title.innerText = "Hello";

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title was clicked!");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
    console.log("mouse is here!");
}

function handleMouseLeave() {
    title.innerText = "Mouse is leave!";
    console.log("mouse is leave!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
