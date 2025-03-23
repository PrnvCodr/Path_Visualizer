const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 1337; // Must use process.env.PORT for Vercel

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
