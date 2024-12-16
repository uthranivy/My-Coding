const express = require('express');  
const app = express();  
const bodyparser = require('body-parser');  
const port = process.env.PORT || 8080;  

app.use(bodyparser.urlencoded({extended: true}));  

    

  const myobj = {users: [
    {
        id: 1,
        name: 'Anu'
    },
    {
        id: 2,
        name: 'Banu'
    },
    {
        id: 3,
        name: 'Divya'
    }
  ]
};

  console.log(myobj);
  console.log(myobj.users.some((ele) => ele.id == 1));

  app.get('/users/:id', (req,res)=>{  
    console.log(req.params);  
    let myJson = [];  
    if(myobj.users.some((ele) => ele.id == req.params.id)){  
        myJson = myobj.users.filter((ele) => ele.id == req.params.id)
    }   
    res.json(myJson)  
})  
app.get('/user', (req, res) => {  
    res.sendFile(__dirname + '/index.html');  
}); 
      
    app.listen(port, () => {  
        console.log(`Ready listening on ${port}`);  
    });  
  
  
