const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/process", req.body);
    res.send("Response from Flask backend: " + JSON.stringify(response.data));
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});

