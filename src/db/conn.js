const dotenv = require("dotenv")
dotenv.config();

const mongoose= require("mongoose");
mongoose.set('strictQuery', false);
const database = (module.exports=()=>{
    const connectionParams ={
        useNewUrlParser: true,
        useUnifiedTopology:true,
        
    };
    try{
        mongoose.connect(process.env.MONGO_URL,connectionParams)
       
        console.log("connected successfully");
    }catch(error){
        console.log("not conected");
    };
})
database();

