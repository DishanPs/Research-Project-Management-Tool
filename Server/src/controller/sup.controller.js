const Supervisor = require("../modal/sup.modal");


const requestSup = async (req, res) => {
    if (req.body) {
        const sup = new Supervisor(req.body);
        await sup.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}


const getAllSupRequests = async (req, res) => {
    await Supervisor.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}


module.exports = {
    requestSup,
    getAllSupRequests,
    
    
}