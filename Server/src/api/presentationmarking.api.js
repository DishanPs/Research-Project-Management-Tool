const express = require("express");
const router = express.Router();
const PresentationMarkingController = require("../controller/presentationmarking.controller");

module.exports = function () {
  router.post("/create", PresentationMarkingController.createMarkingScheme);
  router.get("/", PresentationMarkingController.getAllMarkingSchemes);
  router.get("/:id", PresentationMarkingController.getMarkingScheme);
  return router;
};
