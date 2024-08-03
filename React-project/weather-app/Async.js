"use strict";
const test1 = function () {
    setTimeout(function(){
                console.log("Start of code");
                alert("I am working")
                console.log("End of Code")
    },10)
};
const test2 = function () {
     console.log("Now i get attention")
}


test1();
test2();