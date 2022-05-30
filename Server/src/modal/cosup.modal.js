const mongoose = require("mongoose");

const CoSupSchema = new mongoose.Schema({
  groupID: { type: String, required: true },
  groupName: { type: String, required: true },
  field: { type: String, required: true },
  co_supervisorName: { type: String, required: true },
  status: { type: String, required: true },
});

const CoSupervisor = mongoose.model("cosupervisor", CoSupSchema);
module.exports = CoSupervisor;
