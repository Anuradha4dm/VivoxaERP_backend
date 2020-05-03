const express=require('express');

const customerCURDController=require('../controller/customerCURDController');
const jwtValidator=require('../validation/customerCurdValidation');

const route=express.Router();

//POST /learnes/customer
route.post('/newcustomer',customerCURDController.postNewCustomer);

//GET /learnes/customers
route.get('/customers',customerCURDController.getCustomers);

//GET /learnes/customer/:custId
route.get('/customer/:customerId',jwtValidator.jwtToken,customerCURDController.getSpecificCustomer);

//DELETE /learnes/customer/:custId
route.delete('/customer/:customerId',jwtValidator.jwtToken,customerCURDController.deleteCustomer);

//PUT    /learnes/customer/:custId
route.put('/customer/:customerId',jwtValidator.jwtToken,customerCURDController.putCustomerNewDetails);




module.exports=route;