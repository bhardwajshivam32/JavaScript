// callback functions

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am func and I can...");
    callback("shivam");
}


myFunc(myFunc2);