
const Vtrainning = require('../models/vtrainning');

exports.getVtrainnnings = (req, res, next) => {

    Vtrainning.find()
        .then(vtrainnings => {


            if (vtrainnings.length == 0) {
                return res.status(404).json({
                    message: 'No Vtrainnings Found'
                })
            }

            res.status(200).json({
                message: vtrainnings
            })

        })
        .catch(error => {

            error.statusCode = 500;
            next(error);
        })



}


exports.postNewVtrinning = (req, res, next) => {

    const vTrainId = req.body.vTrainId;
    const customerId = req.JWTData;
    const trainerClassType = req.body.trainerClassType;
    const vehicle = req.body.vehicle;
    const proposedDuration = req.body.proposedDuration;
    const currentDuration = req.body.currentDuration;
    const lastTrainDate = req.body.lastTrainDate;

    const vtrainning = new Vtrainning({

        vtrainId: vTrainId,
        customerId: customerId,
        trainerClassType: trainerClassType,
        vehicle: vehicle,
        proposedDuration: proposedDuration,
        currentDuration: currentDuration,
        lastTrainDate: lastTrainDate

    });


    vtrainning.save()
        .then(result => {

            res.status(200).json({

                message: 'Vtrainner is added'
            })

        })
        .catch(err => {

            err.statusCode = 500;
            next(err);

        })

}

exports.putVtrainningEdit = (req, res, next) => {

    const vtrainningId = req.params.id;

    const updatedVTrainId = req.body.vTrainId;
    const customerId = req.JWTData;
    const updatedTrainerClassType = req.body.trainerClassType;
    const updatedVehicle = req.body.vehicle;
    const updatedProposedDuration = req.body.proposedDuration;
    const updatedCurrentDuration = req.body.currentDuration;
    const updatedLastTrainDate = req.body.lastTrainDate;




    Vtrainning.findById(vtrainningId)
        .then(vtrainning => {

            if (vtrainning.length == 0) {

                const error = new Error('vtrainning doesnot exist');
                error.statusCode = 404;
                throw error;

            }

            vtrainning.vtrainId = updatedVTrainId;
            vtrainning.customerId = customerId;
            vtrainning.trainerClassType = updatedTrainerClassType;
            vtrainning.vehicle = updatedVehicle;
            vtrainning.proposedDuration = updatedProposedDuration;
            vtrainning.currentDuration = updatedCurrentDuration;
            vtrainning.lastTrainDate = updatedLastTrainDate;

            return vtrainning.save();


        })
        .then(result => {
            res.status(200).json({
                message: 'Vtrainning is updated'
            })

        })
        .catch(error => {
            if (!error.statusCode) {

                error.statusCode = 500;
            }
            next(error);
        })

}

exports.getSpecificVtrainnig = (req, res, next) => {

    const vtrainningId = req.params.id;

    Vtrainning.findById(vtrainningId)
        .then(vtrainning => {


            if (!vtrainning) {

                const error = new Error('vtrainning doesnot exist');
                error.statusCode = 404;
                throw error;
            }

            res.status(200).json({
                message: vtrainning
            })

        })
        .catch(error => {
            if (!error.statusCode) {

                error.statusCode = 500;
            }
            next(error);

        })

}

exports.deleteVtrainnig = (req, res, next) => {

    const vtrainningId = req.params.id;

    Vtrainning.findById(vtrainningId)
    .then(vtrainning=>{

            if(!vtrainning){
                const error = new Error('vtrainning doesnot exist');
                error.statusCode = 404;
                throw error;
            }

            return vtrainning.remove();

    })
    .then(result=>{

        res.status(200).json({

            message:'Vtrainning is delete successfully'
        })
    })
    .catch(error=>{


    })



}