function myfun1(){
    console.log('Hello');
}
function myfun2(message, name, val){
    console.log(message,name,val);
    const val1 = name + ' ' + message;
    console.log(val1);
    return val1;// if the value is not return the func call not return any value
} 

myfun2('hello', 'dev', 100);
myfun2('hi', 'devi', 40);

const val1 = myfun2('welcome', 'Hari', 300);
console.log(val1); // must return in myfun3

function myfun3(a,b,c){ 
    const val1 = a*b/c;
    console.log("===" + val1);
    return val1;
}
 
const a1 = myfun3(4,6,2);
const a2 = myfun3(15,25,5);
const a3 = myfun3(36,54,6);

console.log(a1,a2,a3)
