
const mongoose= require("mongoose");
mongoose.set('strictQuery', false);
const database = (module.exports=()=>{
    const connectionParams ={
        useNewUrlParser: true,
        useUnifiedTopology:true,
        
    };
    try{
        mongoose.connect("mongodb+srv://madhav:12345@cluster0.spo58as.mongodb.net/newdeta?retryWrites=true&w=majority",connectionParams)
       
        console.log("connected successfully");
    }catch(error){
        console.log("not conected");
    };
})
database();
