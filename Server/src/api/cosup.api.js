const express = require("express");
const router = express.Router();
const CoSupController = require("../controller/cosup.controller");

module.exports = function () {
  router.post("/request", CoSupController.requestCoSup);
  router.get("/", CoSupController.getAllCoSupRequests);
  router.put("/update/:id", CoSupController.updateStatus);
  return router;
};
