const fs = require('fs');
const http = require('http');  
const dir = './public';  
const mainFile = 'new1.html';  
const url = `${dir}/${mainFile}`;  
console.log(url);  

http.createServer((req,res)=>{  
    fs.readFile(url, (err, html) => {
    if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('File not found');
        return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    return res.end();
});  
    console.log('server running'); 
}).listen(8080);  

const rs = fs.createReadStream(url);  
rs.on('open', (e) => {  
    console.log('File is open');  
    let val = '<br>Opened';  
    updateFile(val);  
});  
rs.on('error', (err) => {
    console.error('Error opening file:', err.message);
});

function updateFile(val) {  
    fs.appendFile(url, val, (err) => {  
        if (err) throw err;  
        console.log('updated file');  
    });  
}  

fs.stat(url, (err, stats) => {  
    if (err) {
        console.error('Error fetching stats:', err.message);
        return;
    }
    console.log(stats.isFile());  
    console.log(stats.isDirectory());  
});  
