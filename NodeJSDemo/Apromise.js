const tatkalBook = new Promise((resolve,reject) => {
    let bookingSuccess = true;
    if(bookingSuccess){
        resolve()
    }else{
        reject()
    }
});

tatkalBook.then(()=> {
    console.log("Ticket Booked")
})
.catch(()=> {
    console.log("Ticket is not Booked")
});


let ready = false;  

const checker = new Promise((resolve, reject) => {  
    console.log(ready);  
    if (ready) {  
        const markReady = 'This is the result';  
        resolve(markReady);  
    } else {  
        const markNot = 'Still working on it.';  
        reject(markNot);  
    }  
});  

  
ready = false;   

checker.then((val) => {
    console.log(val);
})
.catch((err) => {
    console.log('error ' + err);
})
