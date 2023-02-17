//express import
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const secret = "ContactManager"
const cors = require('cors')

//port
const port  = 5500;
//mongoose connections
const main = require('./src/Mongoose-Connections/conection');
main()
//imports modules
const contactRoutes = require('./src/Routers/contact-post-router');
const register = require('./src/Routers/register');
const login = require('./src/Routers/Login');
const serchByEmail = require('./src/Routers/search-by-email')
const deleteContacts = require('./src/Routers/delete-contacts')

//middle-ware
app.use(cors())
//jwt token verification
app.use('/app/v1/contacts', (req, res, next)=>{
    try{
        const token =req.headers.authorization;
        jwt.verify(token, secret,(err, result)=>{
            if(err){
                return res.status(401).json({
                    status:"Failure",
                    message:"Denied Authorization"
                })
            }
            else{
                req.userId = result.data;
                next();
            }
        })

    }catch(e){
        res.status(403).json({
            status:"error",
            message:e.message
        })
    }
})
app.use('/app/v1/contacts/:id', (req, res, next)=>{
    try{
        const token =req.headers.authorization;
        jwt.verify(token, secret,(err, result)=>{
            if(err){
                return res.status(401).json({
                    status:"Failure",
                    message:"Denied Authorization"
                })
            }
            else{
                req.userId = result.data;
                next();
            }
        })

    }catch(e){
        res.status(403).json({
            status:"error",
            message:e.message
        })
    }
})
app.use("/app/v1", contactRoutes);
app.use('/app/v1', register);
app.use('/app/v1', login);
app.use('/app/v1', serchByEmail);
app.use('/app/v1', deleteContacts);
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