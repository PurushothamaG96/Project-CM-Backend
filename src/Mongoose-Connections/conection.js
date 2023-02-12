const mongoose = require('mongoose');
const main = async()=>{
    await mongoose.connect('mongodb://localhost/CM')
    console.log("Connected to mongodb")
}

module.exports = main