const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SubTypesSchema = new Schema({
  LinkName: { type: String, required: true },
  SubmissionType: { type: String, required: true },
  Date: { type: String, required: true },
  Time: { type: String, required: true },
  Status: { type: String, required: true },
});

const SubType = mongoose.model("subtype", SubTypesSchema);
module.exports = SubType;
