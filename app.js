const dotenv = require("dotenv")
dotenv.config()

const express = require("express");
const app = express();
const path = require("path")
const alert = require("alert")
const clintcollection = require("./src/models/deta")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const {json } = require("express")
require("./src/db/conn")
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "./public")
console.log( path.join(__dirname, "./public"));
app.use(express.static(static_path));
const static_path2 = path.join(__dirname, "./views")
app.use(express.static(static_path2))

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get("/", (req , res) => {
    
    res.render('index')
});

app.get("/AboutUs", (req , res) => {
    
    res.render('aboutus')
});
app.get("/Services", (req , res) => {
    
    res.render('services')
});
app.get("/Register", (req , res) => {
    
    res.render('Register')
});
app.get("/Welcome", (req , res) => {
    
    res.render('welcome')
});




app.post("/Register", (req , res) => {
   

    

        const registerClint = new clintcollection({
            name: req.body.text,
            email : req.body.email,
            password: req.body.password,
            profile: req.body.profile,
             dateofbirth : req.body.date,
             gender: req.body.gender,
             height: req.body.height,
             mothertongue: req.body.language,
             religion: req.body.religion,
             city: req.body.city,
            mobilenumber: req.body.phone
        })
        const postdata =  registerClint.save();
        res.send(postdata);
        
        
        // const registerClint = new Register({
  
        //     email : req.body.email,
        //     password: req.body.password,
        //     creatprofilefor: req.body.profile,
        //     dateofbirth : req.body.date,
        //     height: req.body.height,
        //     mothertongue: req.body.language,
        //     religion: req.body.religion,
        //     city: req.body.city,
        //     mobilenumber: req.body.phone
        //     })

        //    const registered = await registerClint.save();
        //    res.status(201).render(index)

    // } catch (error) {
    //   res.status(400).send(error) 
    // }
    clintcollection.find((err,users)=>{
        if(err) console.warn(err)
        console.warn(users)
    })
});

app.post("/index", async (req , res) => {
    
    try {
        
        const email = req.body.email;
        const password = req.body.password;

        console.log(`${email} and password is ${password}`);


        const useremail = await clintcollection.findOne({email:email});
        console.log(useremail);
        
        

        if (useremail.password === password) {
            res.render("Welcome");
        } else {
            
            alert("invalid user details")    
        }

    } catch (error) {
        res.status(400).send("invalid email")
        
    }
})


app.get("/ReadMore", (req , res) => {
    
    res.render('readmore')
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})

