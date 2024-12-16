// npm install mongodb

// const express = require('express');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const router = express.Router();
// const app = express();
// const url = require('./secret.js');


// MongoClient.connect(url,(err,db)=> {
//     if(err) throw err;
//     console.log('Connected');
//     db.close();
// })

// const client = new MongoClient(url,{  
//     useNewUrlParser : true,  
//     useUnifiedTopology : true,  
// })  

// client.connect(err => {  
//     const coll = client.db('people').collection('friends');  
//     console.log('ready');  
//     const myObj = {name: "Laurence"};  
//     coll.insertOne(myObj, (err, res) => {  
//         console.log('inserted');  
//         client.close();  
//     });  
// }); 

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// })

// app.listen(8080,()=>{
//     console.log('Server ready');
// })

const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const app = express();
// const url = require('./secret');

const { MongoClient, ServerApiVersion } = require('mongodb').MongoClient;
const uri = "mongodb+srv://uthra156:WxQgcUK0KKnbQi31@testcluster.dsp2c.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("people");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("friends").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

// async function run() {
//   try { 
//     await client.connect(); 
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally { 
//     await client.close();
//   }
// }
// run().catch(console.dir);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => {
    console.log('Server ready');
});