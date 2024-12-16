function adder(a,b){  
    console.log('adder');  
    return a + b;  
}  

function doubler(a,b){  
    console.log('doubler');  
    return adder(a,b) * 2;  
}  

function output(a,b){  
    console.log(a,b);  
    const dub = doubler(a,b);  
    console.log(dub);  
}  

output(2,5);  

// Recursive

var test4 = function test5(i){  
    console.log(i);  
    if(i<5){  
        test5(i+1);  
    }  
}  

test4(0);  

(()=>{
    console.log("run right way");
})();