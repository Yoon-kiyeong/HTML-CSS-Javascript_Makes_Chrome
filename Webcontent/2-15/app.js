const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) { //위의 if condition이 false이면 javascript는 이 condition을 확인함
    //이 condition이 true이면 이 condition을 실행함
    console.log("You are too young");
} else if(age >= 18 && age <= 50){ //And가 하는 역할은 두가지 condition이 true이어야 true라고 함 둘 중 하나라도 false이면 false가 됨
    console.log("You can drink");
} else if (age > 50 && age <=80) {    
    console.log("You should take care of your health");
} else if (age > 80){
    console.log("You can do whatever you want");
    //위의 모든 condition이 false이면 이 condition을 실행함
    //condition == false
}