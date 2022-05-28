const mongoose = require("mongoose");

const DocumentMarkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalmarks: { type: Number, required: true },
  criteria1: { type: String, required: true },
  c1marks: { type: Number, required: true },
  criteria2: { type: String },
  c2marks: { type: Number },
  criteria3: { type: String },
  c3marks: { type: Number },
  criteria4: { type: String },
  c4marks: { type: Number },
  criteria5: { type: String },
  c5marks: { type: Number },
  criteria6: { type: String },
  c6marks: { type: Number },
  criteria7: { type: String },
  c7marks: { type: Number },
});

const DocumentMarking = mongoose.model('documentmarking', DocumentMarkingSchema);
module.exports = DocumentMarking;