const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin.controller");

module.exports = function () {
  router.get("/admins/:email", AdminController.profileDetails);
  router.put("/update/:id", AdminController.updateAdmin);
  router.delete("/delete/:id", AdminController.deleteAdmin);
  return router;
};
