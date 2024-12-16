const myobj1 = {
    first: 'Anu',
    last: 'devi',
    age: 40,
    a1: 'test',
    a2: 'test 2',
    "test 1": "wow"
}


console.log(myobj1 )

console.log("Dot Notation: " + myobj1.first + ' ' + myobj1.last);

console.log("Bracket notation: " + myobj1['first'] + " " + myobj1['last']);

for(let x=1;x<3;x++){  
    console.log('a' + x);  
    console.log(myobj1['a' + x])  
}  

console.log(myobj1['test 1']); 
console.clear();

const myobj2 = {
    "first": 'Anu',
    "last": 'devi',
    "age": 40, 
    "test 1": "wow"
}

myobj2.last = "NewName";

console.log(myobj2.last); 
console.log(myobj2); 


const myObj4 = {  
    val : 100,  
    val1 : true,  
    val2 : 'String',  
    val3 : {  
        first : 'Laurence',  
        last : 'Svekis'  
    },  
    fullName : function(a,b){  
        return a / b + ' ' + this.val3.first + ' ' + this.val3.last;
        // return this.val3.first + ' ' + this.val3.last

    }  
}  

console.log(myObj4.fullName(20, 5));
