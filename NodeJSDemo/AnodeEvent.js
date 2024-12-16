const events = require('events');
const eEmitter = new events.EventEmitter;  
let counter = 0;

const getParty = function () { 
    counter++; 
    console.log('Time to Party');  
    const ran = Math.ceil(Math.random() * 3);  
    console.log(`party starts in ${ran}`);  
    tester(ran);  
}  

eEmitter.on('music', getParty);  

// tester(2); 

// eEmitter.emit('music'); 

function tester(val) {  
    if(counter<5){
        setTimeout((e) => {  
            eEmitter.emit('music');  
        }, val * 1000); 
    } 
} 

eEmitter.on('event', (a,b) => {  
    console.log(a,b,this);  
});  

eEmitter.emit('event', 'a', 'b'); 

let m = 0;
eEmitter.on('event4',()=>{
    console.log(++m);
})

eEmitter.emit('event4');
 
eEmitter.on('event1', (a,b) => {  
    setImmediate(() => {  
        console.log('1 Async $${a}$$ $${b}$$')  
    })  
})  

eEmitter.on('event2', (a,b) => {  
    console.log('2 Sync $${a}$$ $${b}$$')  
})  

eEmitter.once('event2', () => {  
    console.log('Once Run');
})  

for(let x=0; x<10; x++){  
    eEmitter.emit('event1', x, 'b1');  
    eEmitter.emit('event2', x, 'b2'); 
    eEmitter.emit('event3'); 
}  

// Simple

// const events = require('events');  
// const eMitter = new events.EventEmitter();  
// const sayHello = function(){  
//     console.log('Hello');  
// }  
// eMitter.on('greet', sayHello);  
// eMitter.emit('greet');  
