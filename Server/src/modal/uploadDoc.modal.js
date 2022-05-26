const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UploadDocSchema = new Schema(
  {
    name: { type: String},
    img: { type: String},
  },
  { timestamps: true }
);


const UploadDocument = mongoose.model("UploadTemplate", UploadDocSchema);
module.exports = UploadDocument;