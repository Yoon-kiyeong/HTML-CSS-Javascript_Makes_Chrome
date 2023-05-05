const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;
}

const krAge = calculateKrAge(age);

console.log(krAge);


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

const plusResult = calculator1.add(2,3);
const minusResult = calculator1.min(plusResult,2);
const multiResult = calculator1.mul(10,minusResult);
const divideResult = calculator1.div(multiResult,plusResult);
const powerResult = calculator1.power(divideResult,minusResult);
