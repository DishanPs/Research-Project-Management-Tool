const mongoose = require("mongoose");

const Schema = mongoose.Schema
const SubTypesSchema = new Schema({
    LinkName: { type: String, required: true },
    SubmissionType: { type: String, required: true},
    date: { type: String, required: true},
    time: { type: String, required: true}
});

const SubType = mongoose.model('subtype', SubTypesSchema);
module.exports = SubType;