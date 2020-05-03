const jwt = require('jsonwebtoken');

exports.jwtToken = (req, res, next) => {


    const token = req.get('Authorization').split(' ')[1];
    let decode;

    try {
        jwt.verify(token, '5eac22780a32500c81f48825', function (err, decoded) {
    
            if(err){
                
                err.statusCode=500;
                next(err);
                
            }
            req.JWTData=decoded.customerId;
        });
        
    } catch (error) {

       return  next(error);
        
    }


    next();

}