const express = require("express")
const router = express.Router();
const Crud = require("../models/Crud")

router.get("/", async (req, res) => {
    try {
      
        const data=await Crud.find();
        res.json(data)

    } catch (error) {
        console.log(error)
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const single_data=await Crud.findById(req.params.id)
        res.json(single_data)
        
    } catch (error) {
        console.log(error)
        
    }
})

router.post("/",async(req,res)=>{
    const data=new Crud({
        name:req.body.name,
        author:req.body.author,
        pages:req.body.pages,
        Category:req.body.Category
    })
    try {
       const book= await data.save()
       res.json(book)
        
    } catch (error) {

        res.send("error")
    }

})

router.put('/:id',async(req,res)=>{
    try {
        const single_data=await Crud.findById(req.params.id)
        single_data.name=req.body.name
        single_data.author=req.body.author
        single_data.pages=req.body.pages
        single_data.Category=req.body.Category

        const data=await single_data.save()
        res.json(data)
        
    } catch (error) {
        console.log(error)
        
    }
})

router.delete("/:id",async(req,res)=>{
    const deleteData= await Crud.findById(req.params.id);
    const data=await Crud.findByIdAndRemove(deleteData)
        res.json(data)
    console.log("deleted")


    
})



module.exports = router