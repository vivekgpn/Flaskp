const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

const BACKEND_URL = "http://backend:5000/submit"; // docker-compose use karega

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <input type="text" name="name" placeholder="Enter your name" required />
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await axios.post(BACKEND_URL, { name, email });
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error connecting to backend");
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
