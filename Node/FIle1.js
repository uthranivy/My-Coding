const fs = require('fs');  
const folderName = 'public';  
console.clear();  

try {  
    if (!fs.existsSync(folderName)) {  
        fs.mkdirSync(folderName);  
        console.log('Folder created:', folderName);  
    } else {  
        console.log('Folder already exists:', folderName);  
    }  
} catch (err) {  
    console.error('Error creating folder:', err);  
}  

const folderPath = `./${folderName}`;  

try {  
    fs.writeFileSync(`${folderPath}/index.html`, '<h1>Hello World</h1>');  
    console.log('File created: index.html');  
} catch (err) {  
    console.error('Error creating file:', err);  
}  

try {  
    let files = fs.readdirSync(folderPath);  
    console.log('Files in folder:', files);  
} catch (err) {  
    console.error('Error reading folder:', err);  
}

