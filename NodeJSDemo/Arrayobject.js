
const myArray =['test1', 'hello',{one:1,two:2}];

const myArr1 = myArray;

for(let x=0;x<4;x++){  
    //   myArr1[myArray.length] ='counter ' + x;
    const temp = 'Counter ' + x;  
    myArr1.push(temp);
}  

for(let x=0;x<3;x++){  
    const temp = myArr1.pop(); //remove from end with response.  
    console.log('REMOVED ' + temp);  
}  

for(let x=0;x<3;x++){  
    const temp = myArr1.shift();  
    console.log('REMOVED from Start ' + temp);  
}  

for(let x=3;x<0;x++){  
    const temp = 'Add ' + x;
    myArr1.unshift(temp);  
    console.log('REMOVED from Start ' + temp);  
} 

// console.log(myArray);  
// console.log(myArr1[0]);  
// console.log(myArr1[1]); 
// console.log(myArr1[2]); 

// console.log(myArr1[2]['two']); 
// console.clear();

console.log(myArr1);

