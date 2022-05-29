const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  contactNo: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    // required: true
  },
  type: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
