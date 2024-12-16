const fun1 =  (a,b,c) =>{ 
    const val = a*b*c; 
    return val;
};

console.log(fun1(3,4,5));

let counter = 100;
 function loop(val){ 
    console.log(val);
    if(val<1){
        return
    }
    const temp = val -1;
    loop(temp);
} 

loop(counter); 

function loop2(val){ 
    console.log(val);
    if(val > 0){
        val = val - 1;
        return loop2(val);
    }
    return 'end';
} 

const looper = loop2(25); 
console.log(looper);


function maker(val1){
    return function(val2){
        console.log(val1,val2);
        return val1 + val2;
    }
}

const fun4 = maker(5); 
console.log(fun4(65));


// operator

const x = 3**4; 

console.log("Power of value 3: " + x)


