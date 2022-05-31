const express = require("express");
const router = express.Router();
const GroupController = require("../controller/groups.controller");

module.exports = function () {
  router.post("/register", GroupController.registerGroup);
  router.get("/", GroupController.getAllGroups);
  return router;
};
