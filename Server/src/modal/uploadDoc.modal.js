const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UploadDocSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required:true },
  },
  { timestamps: true }
);

const UploadDocument = mongoose.model("UploadTemplate", UploadDocSchema);
module.exports = UploadDocument;
