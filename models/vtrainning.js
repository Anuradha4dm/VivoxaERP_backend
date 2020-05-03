const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const vtrainningSchema=new Schema({

    
    customerId:{
        type:Schema.Types.ObjectId,
        ref:'customer',
        require:true
    },
    trainerClassType:{
        type:String,
        require:true
    },
    vehicle:{
        type:String,
        require:true
    },
    proposedDuration:{
        type:String,
        require:true
    },
    currentDuration:{
        type:String,
        require:true
    },
    lastTrainDate:{
        type:String,
        require:true
    }


},{timestamps:true});

module.exports=mongoose.model('vtrainning',vtrainningSchema);