const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
  eemail: { type: String, required: true },
  eid: { type: String, required: true },
  gid: { type: String, required: true },
  markingname: { type: String, required: true },
  criteria1: { type: String, required: true },
  c1marks: { type: String, required: true },
  c1emarks: { type: String, required: true },
  criteria2: { type: String },
  c2marks: { type: String },
  c2emarks: { type: String },
  criteria3: { type: String },
  c3marks: { type: String },
  c3emarks: { type: String },
  criteria4: { type: String },
  c4marks: { type: String },
  c4emarks: { type: String },
  criteria5: { type: String },
  c5marks: { type: String },
  c5emarks: { type: String },
  criteria6: { type: String },
  c6marks: { type: String },
  c6emarks: { type: String },
  criteria7: { type: String },
  c7marks: { type: String },
  c7emarks: { type: String },
});

const Evaluation = mongoose.model("evaluation", EvaluationSchema);
module.exports = Evaluation;
