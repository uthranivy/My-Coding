
const students =[
    {name:'Anu', score:'43'},
    {name:'Siva', score:'34'},
    {name:'Priya', score:'53'},
]

let myScore =  students.map((student) => {
    return student.score;
})

console.log(myScore);

