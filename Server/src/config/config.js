const mongoose = require("mongoose");

const URI =
  "mongodb+srv://dishan:Dishan1999@research-project-manage.wg6ln.mongodb.net/Research_Project_Management_Tool?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI);
  console.log("Database Connected");
};

module.exports = connectDB;
