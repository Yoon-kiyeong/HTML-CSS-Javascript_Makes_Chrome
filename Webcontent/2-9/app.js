function sayHello(nameOfPerson, age){ 
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("Yoon",29);
sayHello("Kiyeong",23);
sayHello("Kanae",24);

function plus(a,b){
    console.log(a+b);
}

function divide(a,b){
    console.log(a/b);
}

plus(6,80);
divide(10,5);

const player1 = {
    name: "yoon",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

player1.sayHello("yoon");
player1.sayHello("Lee");