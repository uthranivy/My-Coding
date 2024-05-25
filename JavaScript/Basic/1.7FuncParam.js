
// function parameter


function error(x, y){   // x and y are function parameter
    console.log(x + " Error not loading, " + y);
} 
error(404, "Please check internet connection");

function add(a,b){
    console.log(a + b);
}

add('20', 30); // only concatenate the value
add(20, 30);


            // Return the function 

function returnFunction(x,y){
    return x + y;
}

 var resultFunc =  returnFunction(56, 70);
 resultFunc =  returnFunction(56, 90);
 console.log("Return function result: " + resultFunc);

            // ARROW FUNCTION

let sum = function(x,y){
    return x + y;
};

console.log(sum(20, 30));


let sum2 = (m,n) => m + n;

 
console.log(sum2(90, 30));



