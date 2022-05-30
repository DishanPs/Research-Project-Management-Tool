const Student = require("../modal/student.modal");
const mongoose = require("mongoose");

const registerStudent = async (req, res) => {
  if (req.body) {
    const student = new Student(req.body);
    await student
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const profileDetails = async (req, res) => {
  if (req.body) {
    await Student.findOne({ email: req.params.email })
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const getAllStudents = async (req, res) => {
  await Student.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateStudent = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Student.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  registerStudent,
  updateStudent,
  deleteStudent,
  profileDetails,
  getAllStudents,
};
