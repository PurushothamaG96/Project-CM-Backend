const mongoose = require('mongoose');
const main = async()=>{
    await mongoose.connect('mongodb+srv://Purushothama_G:puru555papu@cluster0.xaulxac.mongodb.net/CM?retryWrites=true&w=majority')
    console.log("Connected to mongodb")
}

module.exports = main