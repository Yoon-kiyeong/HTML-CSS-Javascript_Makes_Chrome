console.log(545454);
console.log("lalala");
console.log('lalala');
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);

//2.3 variable
//variable : 자바스크립트를 비롯한 모든 프로그래밍 언어에서 varialbe은
//값을 저장하거나 유지하는 역할을 함

//const : 상수
//const == constant(상수), constant는 값이 바뀔 수 없다
const a = 10;
const b = 2;
//const b ="2"; <- 이건 문자

// let a = 10;
// let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

let myName = "yoon";
//variable에는 공백이 올 수 없음
//공백이 필요한 경우엔 다음 단어의 첫 글자에 대문자를 사용함
//명칭 : camelCase(낙타 등 모양)
//파이썬에서의 명칭 : snake_case(뱀 모양)
console.log("hello " + myName);
myName = "Yoonkiyeong";
console.log("your name is " + myName);

//let은 새로운 것을 생성할 때 사용하는 것
//새로 업데이트를 할 때에는 let을 넣지 않아도 된다.
//const로 variable을 만들었다면, 절대 값을 업데이트 할 수 없다.(바꿀수 없다)

//var
//var는 이상한 규칙이 있는데 var는 원하는 어디에서든 업데이트를 할 수 있음
//이렇게 되면 문제는 우리는 언어를 통해 보호받지 못한다.

//규칙 : 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var는 쓰지 말 것

//2.4 boolean
//1(On) : true, 0(Off) : false
const amIFat = true;
let something;
console.log(something,amIFat);
//null과 false는 다름. false는 false라는 값이 존재, null은 아무 값도 없음
//undefined == 값이 정해지지 않음, null == 값이 없음

//2.5 Arrays
///array의 목적 : 하나의 variable 안에 데이터의 list를 가지는 것
const daysOfWeek = ["mon", "tue" , "wed" , "thu" , "fri" , "sat"];

//Get Item from Array
console.log(daysOfWeek);

//Add one more day to the array

daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato","tomato","pizza"];
console.log(toBuy[2]);
console.log(toBuy[95195195951]);

//2.6 Objects
//Object는 property룰 가진 데이터를 저장해주며, {}를 사용한다.
const player = {
    name:"yoon",
    point:10,
    fat:true,

};
//object 안에서 =를 사용하지 않음
//한개의 property를 작성한 다음엔 ,를 사용

//property를 불러오는 2가지 방법
// 1.console.log(player.name); => yoon
// 2.console.log(player["name"]); => yoon

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat = false;
console.log(player); //const는 수정할 수 없는데 어떻게 바뀌었지?
// //우리가 한 것은 object안의 무언가를 수정한 것
// //하지만 선언된 object를 바꾸는 것은 불가능하다
// //constant 전체를 하나의 값으로서 업데이트하려고 하면 에러가 발생함
// player.lastName="potato";
// player.point = player.point + 16;
// console.log(player);
// console.log(player.point);

//설명이 필요하지 않은 데이터 리스트들은 array로,
//설명이 필요한 정보가 담긴 데이터 리스트들은 object로

//2.7 Function part One
//Function? 계속 반복해서 사용할 수 있는 코드 조각
//Function은 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해줌
//Function은 만들 때 ()가 있어야 함
function sayHello(){ 
    console.log("hello my name is C");
}
//argument는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법

//2.8 Functions part Two
function sayHello(nameOfPerson, age){ 
    console.log(nameOfPerson);
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age)
}
//이렇게 하면 자바스크립트는 sayHello로 보내진 첫번째 데이터가 nameOfPerson이라는 variable로 가게 된다는 걸 알게 됨
//argument는 하나만 받을 수 있는게 아님
//argument는 function 블럭 안에서만 존재함
sayHello("yoon",30);
sayHello("kim",21);
sayHello("Lee",23);

function plus(a,b){
    console.log(a+b);
}
//NaN == Not a Number(숫자가 아님)
plus(8,60);
//a는 8이 되고 b는 60이 된다
//순서는 매우 중요하다

function divide(a,b){
    console.log(a/b);
}
divide(10,5);

const player1 = {
    name: "yoon",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

player1.sayHello("yoon");
player1.sayHello("Lee");

//function이 object 안에 있을때만 가능하다
//function의 값은 function 안에서만 존재한다

const calculator = {
    add: function(a,b){
    console.log(a+b);
    },
    min: function(a,b){
    console.log(a-b);
    },
    mul: function(a,b){
    console.log(a*b);
    },
    div: function(a,b){
    console.log(a/b);
    },
    power: function(a,b){
    console.log(a**b)
    },
    };

    calculator.add(5,5);
    calculator.min(10,5);
    calculator.mul(5,5);
    calculator.div(20,4);
    calculator.power(2,2);

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
//함수가 그냥 어떤 기능을 수행하는 것이라고 생각하기 보단
//함수는 어떤 일을 수행하고 그 결과를 알려주는 것

const calculator1 = {
    add: function(a, b){
        return a + b;
    },
    min: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    },
};

const plusResult = 5;
const minusResult = calculator1.min(plusResult,2);
const multiResult = calculator1.mul(10,minusResult);
const divideResult = calculator1.div(multiResult,plusResult);
const powerResult = calculator1.power(divideResult,minusResult);
//console.log를 하지 않았기 때문에 아무것도 실행되지 않음
//function안에서 return과 추가작업을 입력하면
//return만 작업하고 추가 수행은 이뤄지지 않는다.
//만약 return 앞에 기타작업이 있다면 이 작업은 수행된다
//즉, return "까지만" 수행된다

const age1 = parseInt(prompt("How old are you?"));
//prompt는 사용자에게 창을 띄울 수 있도록 해줌
//prompt는 javascript를 일시정지 시키고 있다
//창이 떠 있는 동안엔 javascript는 계속 우릴 기다리고 있다
console.log(age1);
//typeof는 데이터의 타입을 볼 수 있게 해준다
//parseInt()는 String을 number로 변환해준다
console.log();

if(isNaN(age1) || age1 < 0) {
    //condition == true
    console.log("Please write a real positive number");
} else if (age1 < 18) { //위의 if condition이 false이면 javascript는 이 condition을 확인함
    //이 condition이 true이면 이 condition을 실행함
    console.log("You are too young");
} else if(age1 >= 18 && age1 <= 50){ //And가 하는 역할은 두가지 condition이 true이어야 true라고 함 둘 중 하나라도 false이면 false가 됨
    console.log("You can drink");
} else if (age1 > 50 && age1 <=80) {    
    console.log("You should take care of your health");
} else if (age1 > 80){
    console.log("You can do whatever you want");
    //위의 모든 condition이 false이면 이 condition을 실행함
    //condition == false
}
//==은 값만을 비교하고, ===은 유형도 비교하여 ===를 주로 사용하는 것을 추천
const title = document.getElementById("title");
console.log(title);
title.innerText = "Got you!"