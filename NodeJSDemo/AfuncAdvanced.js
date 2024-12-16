const fun1 = function(a,b,c){ 
    const val = a*b*c; 
    return val;
}

const val1 =fun1(5,6,7);
const val2 =fun1(5,6,7);

console.log(val1);
console.log(val2);

const a = 5;
const b = 6;
const c = 7;

(function(a,b,c){ 
    const val = a*b*c; 
    console.log(val); 
})(a,b,c);

const fun3 = (function(a,b,c){ 
    const val = a*b*c; 
    return val;
})(a,b,c);

console.log(fun3);