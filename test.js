{   "firstname":"damith",
    "lastname":"anuradha",
    "middlename":"anuradha",
    "namewithinitials":"o.p.m.",
    "dateofbirth":"10/12/2001",
    "nic":"nic,
    "addressline1":"addressline1",
    "addressline2":"addressline2",
    "city":"city",
    "gender":"gender,
    "contactnumber1":"contactnumber1",
    "contactnumber2":"contactnumber2"

}

const token = jwt.sign({
    customerId:customer._id
    
}, customerId, { expiresIn: '1h' });

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiNWVhYzIyNzgwYTMyNTAwYzgxZjQ4ODI1IiwiaWF0IjoxNTg4MzU4MTUzfQ.lv29DxLKr76lWFbwFst_SDo9kWTGTQR1f3GlERMOHBk"