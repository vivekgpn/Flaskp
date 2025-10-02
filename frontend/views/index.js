const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a simple HTML form
app.get("/", (req, res) => {
  res.send(`
    <h2>Submit Data to Flask Backend</h2>
    <form id="myForm">
      <input type="text" id="name" placeholder="Enter name" required />
      <button type="submit">Submit</button>
    </form>
    <div id="response"></div>
    <script>
      const form = document.getElementById('myForm');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const responseDiv = document.getElementById('response');
        try {
          const res = await fetch('http://127.0.0.1:5000/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
          });
          const data = await res.json();
          responseDiv.innerText = JSON.stringify(data);
        } catch (err) {
          responseDiv.innerText = 'Error connecting to backend';
        }
      });
    </script>
  `);
});

// Start frontend server
app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
