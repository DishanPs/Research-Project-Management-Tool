const express = require("express");
const router = express.Router();
const SubTypeController = require("../controller/subTypes.controller");

module.exports = function () {
  router.post("/add", SubTypeController.addSubType);
  router.get("/:id", SubTypeController.getSubType);
  router.put("/update/:id", SubTypeController.updateSubType);
  router.delete("/delete/:id", SubTypeController.deleteSubType);
  router.get("/", SubTypeController.getAllSubTypes);
  return router;
};
