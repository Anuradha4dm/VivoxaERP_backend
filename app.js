const express =require('express');

//adding core modules
const mongoose=require('mongoose');
const bodypaser=require('body-parser');

//adding routes
const customerCRUD=require('./routes/customerCURD');
const vtrainningCURD=require('./routes/vtrainningCURD');

//middlewares
require('dotenv').config();

const app=express();

//variables
const MONGOURL=process.env.MONGOURL;

app.use(bodypaser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/learnes',customerCRUD);
app.use('/learnes',vtrainningCURD);


app.use((error,req,res,next)=>{

    if(error.statusCode){
        res.status(error.statuscode).json({
            message:error.message
        });
    }
    

})


mongoose.connect(MONGOURL,{ useUnifiedTopology: true,useNewUrlParser: true })
.then(result=>{

    console.log("connection success");
    app.listen(3000);

})
.catch(err=>{

    console.log(err);

})

