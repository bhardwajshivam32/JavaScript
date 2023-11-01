// nested destructuring
const users = [
    {userId: 1, firstName: "shivam", gender: "male"},
    {userId: 2, firstName: "satyam", gender: "male"},
    {userId: 3, firstName: "anushka", gender: "female"},
]

const [{firstName: user1firstName} ,  , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(user3gender);