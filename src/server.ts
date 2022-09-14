import express from "express";

const app = express();

app.get("/games", (req, res) => {
  return res.json([]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json([]);
});

app.get("/games/:id/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Ad 1" },
    { id: 2, name: "Ad 2" },
  ]);
});

app.get("/ads/:id/discord", (req, res) => {
  return res.json([]);
});

app.listen(3333, () => {
  console.log("Server listening on port 3333");
});
