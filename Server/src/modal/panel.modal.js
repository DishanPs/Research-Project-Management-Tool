const mongoose = require("mongoose");

const PanelMemberSchema = new mongoose.Schema({
  groupID: { type: String, required: true },
  groupName: { type: String, required: true },
  panelmember1: { type: String, required: true },
  panelmember2: { type: String, required: true },
  topic: { type: String, required: true },
});

const PanelMember = mongoose.model("panelmember", PanelMemberSchema);
module.exports = PanelMember;
