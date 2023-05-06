const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age1 < 0) {
    //condition === true
    console.log("Please write a real positive number");
} else {
    //condition === false
    console.log("Thank you for writing your age");
}