const express = require('express')
const router = express.Router()
const contactsctModel = require("../Models/contact-model")

//middlewares
router.use(express.json())
router.use(express.urlencoded())

//get method
router.get("/contacts/:id", async(req, res)=>{
    try{
        console.log(req.params.id)
        const search = `\^${req.params.id}`
        const data = await contactsctModel.find({$and:[{email:{$regex:search}}, {userId:req.userId}]})
        res.status(200).json({
            status:"Succes",
            message:"data send Successfully",
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