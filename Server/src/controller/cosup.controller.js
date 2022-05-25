const CoSupervisor = require("../modal/cosup.modal");


const requestCoSup = async (req, res) => {
    if (req.body) {
        const cosup = new CoSupervisor(req.body);
        await cosup.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}


const getAllCoSupRequests = async (req, res) => {
    await CoSupervisor.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}


module.exports = {
    requestCoSup,
    getAllCoSupRequests,
    
    
}