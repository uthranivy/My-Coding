const http = require('http');  

//console.log(http);  

// http.createServer((req,res) => {  
//     res.writeHead(200, {'Content-Type': 'text/html'});  
//     if(req.url == '/') {  
//         res.write('Main landing page');  
//     }  
//     else if(req.url == '/test') {  
//         res.write('Test page');  
//     }  
//     else {  
//         res.write('Page not FOUND');  
//     }  
//     res.end();  
// }).listen(8080); 

const myJson = require('./Mod3Json');
console.log(myJson);

http.createServer((req,res) => {  
    res.writeHead(200, {'Content-Type': 'application/json'});  
    res.write(JSON.stringify(myJson));
    res.end();  
}).listen(8080); 

console.log("Server Running");
