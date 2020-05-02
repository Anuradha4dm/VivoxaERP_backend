const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const customer=new Schema({

    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    middlename:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    namewithinitials:{
        type:String,
        require:true
    },
    dateofbirth:{
        type:String,
        require:true
    },
    nic:{
        type:String,
        require:true

    },
    addressline1:{
        type:String,
        require:true
    },
    addressline2:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    contactnumber1:{
        type:String,
        require:true
    },
    contactnumber2:{
        type:String,
        require:true
    },
    vtraining:{
        type:Schema.Types.ObjectId,
        ref:"vtraining",
        
    },
    license:{
        type:Schema.Types.ObjectId,
        ref:'license',
       
    }

},{timestamps:true});


module.exports=mongoose.model("customer",customer);