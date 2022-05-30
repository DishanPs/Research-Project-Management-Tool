const Admin = require("../modal/admin.modal");
const mongoose = require("mongoose");

const profileDetails = async (req, res) => {
  if (req.body) {
    await Admin.findOne({ email: req.params.email })
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const updateAdmin = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Admin.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteAdmin = async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  profileDetails,
  updateAdmin,
  deleteAdmin,
};
