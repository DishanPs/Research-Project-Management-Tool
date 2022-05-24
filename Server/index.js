const express = require("express");
const cors = require('cors');

const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

const groupApi = require("./src/api/groups.api");
app.use("/group", groupApi());

const topicApi = require("./src/api/topics.api");
app.use("/topic", topicApi());

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });