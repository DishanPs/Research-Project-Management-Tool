const express = require("express");
const router = express.Router();
const EvaluationController = require("../controller/evaluation.controller");

module.exports = function () {
  router.post("/evaluate", EvaluationController.createEvaluation);
  return router;
};
