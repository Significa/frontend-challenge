require("dotenv/config");
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/search", async (req, res) => {
  try {
    const { s } = req.query;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${s}`
    );
    const data = await response.json();
    return res.json(data);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/movie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`
    );
    const data = await response.json();
    return res.json(data);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3333, () => {
  console.log("Server is listening on port 3333");
});
