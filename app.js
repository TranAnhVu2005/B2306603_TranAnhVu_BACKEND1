const express = require("express");
const cors = require("cors");

const app = express();

//Cho phép cross-origin resource sharing
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
})

module.exports = app;