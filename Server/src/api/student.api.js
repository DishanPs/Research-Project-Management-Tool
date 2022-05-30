const express = require("express");
const router = express.Router();
const StudentController = require("../controller/student.controller");

module.exports = function () {
  router.post("/register", StudentController.registerStudent);
  router.get("/students/:email", StudentController.profileDetails);
  router.get("/", StudentController.getAllStudents);
  router.put("/update/:id", StudentController.updateStudent);
  router.delete("/delete/:id", StudentController.deleteStudent);

  return router;
};
