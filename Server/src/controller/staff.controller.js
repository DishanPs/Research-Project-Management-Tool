const Staff = require("../modal/staff.modal");
const mongoose = require("mongoose");

const registerStaff = async (req, res) => {
  if (req.body) {
    const staff = new Staff(req.body);
    await staff
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const profileDetails = async (req, res) => {
  if (req.body) {
    await Staff.findOne({ email: req.params.email })
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const getAllStaffs = async (req, res) => {
  await Staff.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateStaff = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Staff.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteStaff = async (req, res) => {
  await Staff.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  registerStaff,
  updateStaff,
  deleteStaff,
  profileDetails,
  getAllStaffs,
};
