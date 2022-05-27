const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubmissionSchema = new Schema(
    {
        groupId: {type: String},
        subType: {type: String},
        file: {type: String}
    },
    { timestamps: true }
);

const SubmitDocument = mongoose.model("Submission", SubmissionSchema);
module.exports = SubmitDocument;

