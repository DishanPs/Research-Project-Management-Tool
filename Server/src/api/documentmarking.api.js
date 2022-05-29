const express = require("express");
const router = express.Router();
const DocumentMarkingController = require("../controller/documentmarking.controller");

module.exports = function () {
  router.post("/create", DocumentMarkingController.createMarkingScheme);
  router.get("/", DocumentMarkingController.getAllMarkingSchemes);
  router.get("/:id", DocumentMarkingController.getMarkingScheme);
  return router;
};
