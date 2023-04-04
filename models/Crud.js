const mongoose=require("mongoose");

const crudDemo=new mongoose.Schema({

    name:{
        type:String,
        required : true
    },
    author:{
        type:String,
        required : true
    },
    pages:{
        type:Number,
        required : true
    },
    Category:{
        type:String,
        required : true
    }

     
})
module.exports=mongoose.model("Crud",crudDemo)