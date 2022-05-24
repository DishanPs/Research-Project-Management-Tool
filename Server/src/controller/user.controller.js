const User = require("../modal/user.modal");


const registerUser = async (req, res) => {
    if (req.body) {
        const Users = new User(req.body);
        await Users.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

const profileDetails = async (req, res) => {
    if (req.body){
        await User.findOne({'email': req.params.email})
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}

const getAllUser = async (req, res) => {
    await User.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}


const updateUser = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await User.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(err);
            });
    }
}

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


module.exports = {
    registerUser,
    profileDetails,
    getAllUser,
    updateUser,
    deleteUser,
    
    
}