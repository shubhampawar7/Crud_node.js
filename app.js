const express=require("express");
const mongoose=require("mongoose");
const url="mongodb://localhost:27017/crudapp"
const app=express();


//DB CONNECTIVITY START
mongoose.connect(url,{useNewUrlParser:"true"})
const con=mongoose.connection

con.on("open",()=>{
    console.log("db connected")
})
//DB CONNECTIVITY END


//FOR USE JSON 
app.use(express.json())



//Router start
const crud=require("./routes/crud")
app.use("/",crud)
//Router End

// app.get("/",(req,res)=>{
//     res.send("hello")
//     console.log("started")
// })
app.listen(4000,()=>{
    console.log("server started")
})