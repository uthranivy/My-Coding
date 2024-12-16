let counter = 0;  

// async function hello(mes) {  
//     console.log(mes);  
//     counter++;  
    
//     let pro1 = new Promise((res, rej) => {  
//         setTimeout(res("works"), 2000);  
//     });  
    
//     let result = await pro1;  
//     return `${mes} ${counter} ${result}`;  
// }  

// function output(mes) {  
//     counter++;  
//     console.log(`${mes} ${counter}`);  
// }  

// hello('Hello World').then((val) => {  
//     console.log(val);  
// });  

// for(let i=0;i<5;i++){
//     output(`Loop ${i}`);
// }

//Ex 2: Callback

const arr = [1,2,3,4,5];   
// console.clear();  
// arr.forEach((el)=>{  
//     console.log(el);  
//     console.log('sync');  
// });  

function aFun(myArr, callback){  
    myArr.forEach((el)=>{  
        setTimeout(callback, 1000, el);  
    })  
    myArr.forEach((el)=>{  
        setTimeout(callback, 0, `${el}`);  
    }); 
}  

// aFun(arr, (val)=>{  
//     console.log(val);  
//     console.log('async');  
// });  

aFun(arr, (val)=>{  
    counter++;  
    console.log(counter + ' ' + val);  
});  

counter++;  
console.log(counter + ' ' + 'test'); 

console.log('test');  