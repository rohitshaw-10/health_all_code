// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/submit", async (req, res) => {
  const { symptoms } = req.body;

  try {
    // Forwarding the symptoms data to Flask server
    const flaskResponse = await axios.post("http://localhost:5001/predict", {
      symptoms,
    });

    // Return the processed result back to the React frontend
    res.json(flaskResponse.data);
  } catch (error) {
    console.error("Error in communication with Flask server", error);
    res.status(500).send("Internal server error");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
