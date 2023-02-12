//express import
const express = require('express');
const app = express();
//port
const port  = 6000;
//mongoose connections
const main = require('./Mongoose-Connections/conection');
main()
//imports modules
const contactRoutes = require('./Routers/contact-post-router');
const register = require('./Routers/register');
const login = require('./Routers/Login');


//middle-ware
app.use("/app/v1", contactRoutes);
app.use('/app/v1', register);
app.use('/app/v1', login);

app.get("/app/v1", (req, res)=>{
    try{
        res.status(200).json({
            status:"Success",
            message:"Working"
        })
    }catch(e){
        res.status(500).json({
            status:"Error",
            message:e.message
        })
    }
});

//port listening
app.listen(port, (e)=>{
    if(e){
        console.log(e)
    }
    else{
        console.log("Server is up at", port)
    }
});