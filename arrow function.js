// arrow function

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}
singHappyBirthday();



const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,5);
console.log(ans);



// const isEven = (number) => {
//     return number % 2 === 0;
// }
const isEven = function(number){
    return number % 2 === 0;
}
const ans1 = isEven(5);
console.log(ans1)



const firstChar = anyString => anyString[0];
console.log(firstChar("shivam"));



const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

