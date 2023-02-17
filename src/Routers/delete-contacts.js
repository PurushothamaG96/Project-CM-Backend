const express = require('express')
const router = express.Router()
const contactsctModel = require("../Models/contact-model")

//middlewares
router.use(express.json())
router.use(express.urlencoded())

//delete method
router.delete("/contacts", async(req, res)=>{
    try{
        console.log(req.body)
        const data = await contactsctModel.deleteMany({_id:{$in:req.body}})
        res.status(200).json({
            status:"Succes",
            message:"delete Successfully",
            data:data
        })
    }catch(e){
        res.status(500).json({
            status:"Error",
            message:e.message
        })
    }
})

module.exports = router