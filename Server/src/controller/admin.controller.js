const Admin = require("../modal/admin.modal");
const mongoose = require("mongoose");

const profileDetails = async (req, res) => {
    if (req.body){
        await Admin.findOne({'email': req.params.email})
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}



module.exports = {
    
    profileDetails, 
}