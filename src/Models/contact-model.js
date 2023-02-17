const mongoose = require("mongoose");
const {model, Schema} = mongoose;
const objectId = require('mongoose').ObjectId
//Schema define
const contactSchema = new Schema({
    name: {type: String}, 
    designation: String,
    company: String,
    industry:String,
    email:String,
    phonenumber:Number,
    country:String,
    userId:{type:objectId, ref:"users", required:true}
},{timestamps:true})
//model connection
const userModel = model("contacts", contactSchema);
module.exports = userModel;