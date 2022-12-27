const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient
app.use(express.json())
app.get('/',(req,res) => {
    res.send("welcome to mongodb api")
})
app.get("/newdetas",(req,res)=>{
    database.collection('newdetas').find({}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
app.listen(8080 , () => {
    MongoClient.connect("mongodb+srv://madhav:12345@cluster0.spo58as.mongodb.net/newdeta?retryWrites=true&w=majority",{useNewUrlParser:true},(error,result) => {
        if(error) throw error;
        database = result.db('newdeta')
        console.log("connection successful");
    })})