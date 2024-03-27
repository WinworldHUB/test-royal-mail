import fetch from "node-fetch";
import express from "express";
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const response = await fetch(
    "https://www.royalmail.com/track-your-item#/tracking-results/WG339979238GB"
  );
  const body = await response.text();
  res.send(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
