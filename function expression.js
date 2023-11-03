// function expression

// function singHappyBirthday(){
//     console.log("happy birthday to you .....");
// }


const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}
singHappyBirthday();



const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,5);
console.log(ans);



const isEven = function(number){
    return number % 2 === 0;
}
const ans1 = isEven(2);
console.log(ans1);



const firstChar = function(anyString){
    return anyString[0];
}
const ans2 = firstChar("shivam");
console.log(ans2);

