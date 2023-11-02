function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

function sumTwoNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

// const returnedValue = sumTwoNumbers(8, 9, 5);
// console.log(returnedValue);

// isEven
// input : 1 number
// output : true, false

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(8));


// function
// input : string
// output : firstcharacter

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("zbd"));


// function
// input : Array, target (number)
// output : index of target if target present in Array

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 3);
console.log(ans);

