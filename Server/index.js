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

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});


const userApi = require("./src/api/user.api");
app.use("/user", userApi());

const loginApi = require("./src/api/login.api");
app.use("/login", loginApi());
