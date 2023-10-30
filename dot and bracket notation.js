// difference between dot and bracket notation
const key = "email";
const person = {
    name: "Shivam",
    age: "22",
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

console.log(person["person hobbies"]);
person[key] = "bhardwajshivam32@gmail.com";
console.log(person);