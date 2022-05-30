const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
  groupID: { type: String, required: true },
  groupName: { type: String, required: true },
  supervisorName: { type: String, required: true },
  cosupervisorName: { type: String, required: true },
  topic: { type: String, required: true },
  status: { type: String, required: true },
});

const Topic = mongoose.model("topic", TopicSchema);
module.exports = Topic;
