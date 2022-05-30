const express = require("express");
const router = express.Router();
const PanelMembersController = require("../controller/panel.controller");

module.exports = function () {
  router.post("/add", PanelMembersController.assignPanel);
  router.get("/", PanelMembersController.getAllPanelDetails);
  return router;
};
