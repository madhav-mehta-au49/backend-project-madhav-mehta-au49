const mongoose = require("mongoose");

const bachlorSchema = new mongoose.Schema({
name : {
    type:String,
    require:true    
},
email : {
    type:String,
    require:true,
    unique:true
},	
password : {
    type:String,
    require:true
},	
dateofbirth :	{
    type:Date,
    require:true,   
},
gender : {
    type:String,
    require:true
},
height : {
    type:String,
    require:true,  
},	
mothertongue :	{
    type:String,
    require:true,
     
    
},
religion :	{
    type:String,
    require:true,
},
city :	    {
    type:String,
    require:true,
},
mobilenumber : {
    type:Number,
    require:true,
    unique:true
}
})

const clintcollection = new mongoose.model("newdeta",bachlorSchema);

module.exports = clintcollection;