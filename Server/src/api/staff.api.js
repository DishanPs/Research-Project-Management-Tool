const express = require("express");
const router = express.Router();
const StaffController = require("../controller/staff.controller");

module.exports = function () {
  router.post("/register", StaffController.registerStaff);
  router.get("/staffs/:email", StaffController.profileDetails);
  router.get("/", StaffController.getAllStaffs);
  router.put("/update/:id", StaffController.updateStaff);
  router.delete("/delete/:id", StaffController.deleteStaff);

  return router;
};
