// let and var
// console.log("Using var");
for(var i=0; i<5;i++){
    setTimeout(function() {  
        console.log(i);
    },3000);
}


// Using let for (for)loop
// console.log("Using let");
for(let i=0; i<5;i++){
    setTimeout( () => { 
        console.log(i);
    },3000);
}
