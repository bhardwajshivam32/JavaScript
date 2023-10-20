//  and or operator

let firstName = "Shivam";
let age = 19;

// if(firstName[0] === "S"){
//     console.log("your Name starts with S")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "S" && age>18){
//     console.log("Name starts with S and above 18");
// }else{
//     console.log("inside else");
// }

if(firstName[0] === "S" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}