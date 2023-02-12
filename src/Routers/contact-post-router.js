const { urlencoded } = require('body-parser')
const express = require('express')
const router = express.Router()

//middlewares
router.use(express.json())
router.use(express.urlencoded())

//get method
router.get("/contacts", (req, res)=>{
    try{
        res.status(200).json({
            status:"Success",
            message:"data send Successfully",
            data:req.body
        })
    }catch(e){
        res.status(500).json({
            status:"Error",
            message:e.message
        })
    }
})

//post method
router.post("contacts", (req, res)=>{
    try{
        res.status(201).json({
            status:"Success",
            message:"posted Success fully"
        })
    }catch(e){
        res.status(500).json({
            status:"Error",
            message:e.message,
            data:req.body
        })
    }
})

module.exports = router

