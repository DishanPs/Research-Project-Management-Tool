const express = require("express");
const router = express.Router();
const UploadDocController = require("../controller/uploadDoc.controller");

module.exports = function () {
  router.post("/", UploadDocController.addUpDoc);
  router.get("/:id", UploadDocController.getUpDoc);
  router.put("/update/:id", UploadDocController.updateUpDoc);
  router.delete("/delete/:id", UploadDocController.deleteUpDoc);
  router.get("/", UploadDocController.getAllUpDocs);
  return router;
};
