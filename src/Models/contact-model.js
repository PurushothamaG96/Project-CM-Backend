const mongoose = require("mongoose");
const {model, Schema} = mongoose;
const objectId = mongoose.ObjectId
//Schema define
const contactSchema = new Schema({
    name: {type: String}, 
    designation: String,
    company: String,
    industry:String,
    email:String,
    phonenumber:Number,
    category:String,
    userID:{type:objectId, ref:"users"}
})
//model connection
const userModel = model("users", userSchema);
module.exports = userModel;