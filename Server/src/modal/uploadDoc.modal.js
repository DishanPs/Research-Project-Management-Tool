const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UploadDocSchema = new Schema(
  {
    name: { type: String},
    artist: { type: String},
    song: { type: String},
    img: { type: String},
  },
  { timestamps: true }
);


const UploadDocument = mongoose.model("song", UploadDocSchema);
module.exports = UploadDocument;