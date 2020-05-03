const jwt = require('jsonwebtoken');
const Customer = require('../models/customer');
const bcrypt = require('bcryptjs');

//add new customer
exports.postNewCustomer = (req, res, next) => {

    const firstname = req.body.firstname;
    const email = req.body.email;
    const lastname = req.body.lastname;
    const middlename = req.body.middlename;
    const namewithinitials = req.body.namewithinitials;
    const dateofbirth = req.body.dateofbirth;
    const nic = req.body.nic;
    const addressline1 = req.body.addressline1;
    const addressline2 = req.body.assressline2;
    const city = req.body.city;
    const gender = req.body.gender;
    const contactnumber1 = req.body.contactnumber1;
    const contactnumber2 = req.body.contactnumber2;

    

    const customer = new Customer({

        firstname: firstname,
        lastname: lastname,
        middlename: middlename,
        namewithinitials: namewithinitials,
        dateofbirth: dateofbirth,
        nic: nic,
        addressline1: addressline1,
        addressline2: addressline2,
        city: city,
        email: email,
        gender: gender,
        contactnumber1: contactnumber1,
        contactnumber2: contactnumber2

    });

    customer.save()
        .then(retult => {

            res.status(200).json({
                message: "user added successfully"
            })

        })
        .catch(err => {

            err.statusCode = 503;
            next(err);
        })

}

//this is for getting all the customers
exports.getCustomers = (req, res, next) => {

    Customer.find()
        .then(customers => {

            if (!customers) {

                const error = new Error("No Any Customers Found");
                error.statusCode = 404;
                throw error;

            }

            res.status(200).json({

                message: 'Users are Found',
                customers: customers

            });

        })
        .catch(error => {

            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        })



}

//get specific customer
exports.getSpecificCustomer = (req, res, next) => {

    const customerId = req.params.customerId;

    if (req.JWTData !== customerId) {

        const error = new Error("Access Denied! You Can Not Access This Customer");
        error.statusCode = 404;
        next(error);

    }


    Customer.findById(customerId)
        .then(customer => {

            if (!customer) {

                const error = new Error("No Any Customers Found");
                error.statusCode = 404;
                throw error;

            }


            res.status(200).json({

                customer: customer

            })


        })
        .catch(error => {

            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);

        })

}

exports.deleteCustomer = (req, res, next) => {

    const customerId = req.params.customerId;

    if (req.JWTData !== customerId) {

        const error = new Error("Access Denied! Can Not Romove this Customer");
        error.statusCode = 404;
        next(error);

    }

    Customer.findById(customerId)
        .then(customer => {

            if (!customer) {

                const error = new Error("No Such Customers Found");
                error.statusCode = 404;
                throw error;

            }

            return customer.remove();

        })
        .then(result => {

            res.status(200).json({
                message: "Customer Is Deleted"
            })

        })
        .catch(error => {

            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);

        })


}

exports.putCustomerNewDetails = (req, res, next) => {

    const customerId = req.params.customerId;
    

    if (req.JWTData !== customerId) {

        const error = new Error("Access Denied! Can Not Romove this Customer");
        error.statusCode = 404;
        next(error);

    }

    const updateFirstname = req.body.firstname;
    const updateEmail = req.body.email;
    const updateLastname = req.body.lastname;
    const updateMiddlename = req.body.middlename;
    const updateNamewithinitials = req.body.namewithinitials;
    const updateDateofbirth = req.body.dateofbirth;
    const updateNic = req.body.nic;
    const updateAddressline1 = req.body.addressline1;
    const updateAddressline2 = req.body.assressline2;
    const updateCity = req.body.city;
    const updateGender = req.body.gender;
    const updateContactnumber1 = req.body.contactnumber1;
    const updateContactnumber2 = req.body.contactnumber2;


    Customer.findById(customerId)
        .then(customer => {

            if (!customer) {

                const error = new Error("No Such Customers Found");
                error.statusCode = 404;
                throw error;

            }



                customer.firstname= updateFirstname,
                customer.lastname= updateLastname,
                customer.middlename= updateMiddlename,
                customer.namewithinitials= updateNamewithinitials,
                customer.dateofbirth= updateDateofbirth,
                customer.nic= updateNic,
                customer.addressline1= updateAddressline1,
                customer.addressline2= updateAddressline2,
                customer.city= updateCity,
                customer.email= updateEmail,
                customer.gender= updateGender,
                customer.contactnumber1= updateContactnumber1,
                customer.contactnumber2= updateContactnumber2

           




            return customer.save();

        })
        .then(result => {

            res.status(200).json({
                message: "Customer  Details Are Chanend"
            })

        })
        .catch(error => {

            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);

        })




}





















