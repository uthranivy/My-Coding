const fs = require('fs');
const dir = './public';
let tempCounter = 1;
let newFileName = `new${tempCounter}.html`;
console.clear();


maker();

//Rename File

function renameFilerr(fileName,newName){  
    console.log(fileName);  
    fs.rename(fileName,newName,(err)=>  
    {  
        if(err) throw err;  
        console.log(`File Renamed - ${newName} from ${fileName}`);  
    })  
}  

renameAll()  
function renameAll(){  
    fs.readdir(dir, (err, files)=>  
    {  
        files.forEach((myFile, ind)=>  
        {  
            renameFilerr(dir + '/' + myFile, `${dir}/new${ind}.html`);  
        })  
    })  
} 

function maker(){
for(let i=0; i<5;i++){
fs.readdir(dir, (err,files) => {
    console.log(files);
    // console.log(files.length);
    console.log(err);
    tempCounter = files.length + i + 1;
    newFileName = `new${tempCounter}.html`;
    createNewFile(newFileName)
});
} 
}


//Update the content of a file

// myLog('test2');  
// function overmyLog(val) {  
//     const html = ` ${val} `;  
//     fs.writeFile(dir + '/log.html', html, (err) => {  
//         if (err) throw err;  
//         console.log('Updated WriteFile ${val}');  
//     });  
// }  

// function myLog(val) {  
//     const html = `<br> ${val} `;  
//     fs.appendFile(dir + '/log.html', html, (err) => {  
//         if (err) throw err;  
//         console.log('Appended ${val}');  
//     });  
// }  

// Delete file

// removeAll();
// function removeAll()  
// {  
//     fs.readdir(dir, (err, files)=>{  
//         files.forEach((myFile)=> {  
//             delFile(dir + '/' + myFile);  
//     })  
//     })  
// }  

// // delFile(dir + '/log.html');  
// function delFile(val){  
//     fs.unlink(val,(err)=>  
//     {  
//         if(err) throw err;  
//         console.log('file Deleted');  
//     })  
// }  


function createNewFile(fileName){
    const html = `<h1>Hello ${tempCounter} </h1>`;
    fs.appendFile(dir + '/' + fileName, html, (err) =>{
        if(err) throw err;
        console.log(`Save File ${fileName}`)
    })
}

 