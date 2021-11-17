var express = require("express");
var app = express();
const { MongoClient,ObjectId } = require('mongodb');
var url = "mongodb://localhost:27017/";
app.use(express.urlencoded({ extended: true }))
app.use(express.json());



const cors = require('cors')
app.use(cors());


//ROUTE TO DISPLAY ALL LAPTOPS IN PRODUCT PAGE 

app.get("/getproducts",(req,res)=>{

    MongoClient.connect(url,function(err,conn){

        var db=conn.db("Tech4you")

        db.collection('Products').find().toArray((err,data) => {

            res.send(data)

        })
   })

})


//ROUTE TO DISPLAY RAM SPECIFICATIONS IN CART PAGE

app.get("/getT4/RAM",(req,res)=>{

    MongoClient.connect(url,function(err,conn){

         db=conn.db("Tech4you")

        db.collection('RAM').find().toArray((err,data) => {

            res.send(data)

        })
   })

})

//ROUTE TO DISPLAY RAM SPECIFICATIONS IN CART PAGE

app.post("/PostT4/Orders",function(req,res){

    console.log(req.body)

    MongoClient.connect(url,function(err,conn){

        var db=conn.db("Tech4you");

        db.collection("Orders").insertOne(req.body,function(err,data){
console.log(data)
            res.send(data)

        })

    })

})

app.get("/getT4/Orders",function(req,res){
   

        MongoClient.connect(url,function(err,conn){
    
            var db=conn.db("Tech4you")
    
            db.collection('Orders').find().toArray((err,data) => {
    
                res.send(data)
    
            })
       })
    
    })



app.listen(9090,function(){console.log("App running on 9090")})