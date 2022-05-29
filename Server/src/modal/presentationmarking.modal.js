const mongoose = require("mongoose");

const PresentationMarkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalmarks: { type: String, required: true },
  criteria1: { type: String, required: true },
  c1marks: { type: String, required: true },
  criteria2: { type: String },
  c2marks: { type: String },
  criteria3: { type: String },
  c3marks: { type: String },
  criteria4: { type: String },
  c4marks: { type: String },
  criteria5: { type: String },
  c5marks: { type: String },
  criteria6: { type: String },
  c6marks: { type: String },
  criteria7: { type: String },
  c7marks: { type: String },
});

const PresentationMarking = mongoose.model(
  "presentationmarking",
  PresentationMarkingSchema
);
module.exports = PresentationMarking;
