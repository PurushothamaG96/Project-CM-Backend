const { urlencoded } = require('body-parser')
const express = require('express')
const router = express.Router()
const contactsctModel = require("../Models/contact-model")

//middlewares
router.use(express.json())
router.use(express.urlencoded())


//get method
router.get("/contacts", async(req, res)=>{
    try{
        const data = await contactsctModel.find({userId:req.userId})
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

//post method
router.post("/contacts", async(req, res)=>{
    try{
        const userId = req.userId
        const contactsArr = req.body
        console.log(req.body)
        const contactDetails = contactsArr.map(data=>{return{...data, userId:userId}})
        console.log(contactDetails)
        const data =await contactsctModel.create(contactDetails)
        res.status(201).json({
            status:"Success",
            message:"posted Success fully",
            data
        })
    }catch(e){
        res.status(500).json({
            status:"Errors",
            message:e.message
        })
    }
})

module.exports = router

