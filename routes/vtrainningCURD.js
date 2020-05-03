const express=require('express');

//validation 
const JWTvalidation=require('../validation/JWTvalidation');

//import controller
const vtrainningCURDController=require('../controller/vtrainningCURDController');

const route=express.Router();

// GET: /learnes/getVtrainning
route.get('/getVtrainning',JWTvalidation.jwtToken,vtrainningCURDController.getVtrainnnings);

// POST: /learnes/newVtrainning
route.post('/newVtrainning',JWTvalidation.jwtToken,vtrainningCURDController.postNewVtrinning);

// PUT: /learnes/editVtrainng/:id
route.put('/editVtrainng/:id',JWTvalidation.jwtToken,vtrainningCURDController.putVtrainningEdit);

// GET: /learnes/vtrainning/:id
route.get('/vtrainning/:id',JWTvalidation.jwtToken,vtrainningCURDController.getSpecificVtrainnig);

//DELETE : /learnes/deleteVtrainning
route.delete('/vtrainning/:id',JWTvalidation.jwtToken,vtrainningCURDController.deleteVtrainnig);


module.exports=route;
