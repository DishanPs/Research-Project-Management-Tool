const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  leaderID: { type: String, required: true },
  leaderName: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  member2ID: { type: String, required: true },
  member2Name: { type: String, required: true },
  member3ID: { type: String, required: true },
  member3Name: { type: String, required: true },
  member4ID: { type: String, required: true },
  member4Name: { type: String, required: true },
  groupName: { type: String, required: true },
});

const Group = mongoose.model("group", GroupSchema);
module.exports = Group;
