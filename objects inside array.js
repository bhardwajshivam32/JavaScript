// objects inside array
// very useful in real world applications

const users = [
    {userId: 1, firstName: "shivam", gender: "male"},
    {userId: 2, firstName: "satyam", gender: "male"},
    {userId: 3, firstName: "sundram", gender: "male"},
]
for(let user of users){
    console.log(user.firstName)
}