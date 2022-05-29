const mongoose = require("mongoose");

const SupSchema = new mongoose.Schema({
  groupID: { type: String, required: true },
  groupName: { type: String, required: true },
  field: { type: String, required: true },
  supervisorName: { type: String, required: true },
  status: { type: String, required: true },
});

const Supervisor = mongoose.model("supervisor", SupSchema);
module.exports = Supervisor;
