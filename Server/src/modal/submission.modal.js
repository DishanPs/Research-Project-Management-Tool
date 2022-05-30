const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubmissionSchema = new Schema(
    {
        groupId: {type: String, required: true},
        subType: {type: String, required: true},
        file: {type: String, required: true}
    },
    { timestamps: true }
);

const SubmitDocument = mongoose.model("Submission", SubmissionSchema);
module.exports = SubmitDocument;

