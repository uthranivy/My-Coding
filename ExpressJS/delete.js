const express = require('express');  
const app = express();  
const bodyparser = require('body-parser');  
const port = process.env.PORT || 8080;  

app.use(bodyparser.urlencoded({extended: true}));  

    app.get('/user', (req, res) => {  
        res.sendFile(__dirname + '/index.html');  
    }); 
    app.post('/users', (req, res) => {  
        console.clear();  
        console.log(req.body);  
        res.send(`DONE: User ${req.body.user} ID ${req.body.id}`);  
    });  
      
    app.listen(port, () => {  
        console.log(`Ready listening on ${port}`);  
    });  
 
    app.get('/users/:id', (req,res)=>{  
        const id = req.params.id;  
        console.log('found ' + id);  
        res.send('found ' + id);  
    })  
  
  app.delete('/users/:id', (req,res)=>{  
    const id = req.params.id;  
    console.log('deleted ' + id);  
    res.send({status:'done',id:id});  
  })

  app.put('/users/:id', (req,res)=>{  
    const id = req.params.id;  
    console.log('Updated ' + id);  
    res.send({status:'updated',id:id});  
  })
