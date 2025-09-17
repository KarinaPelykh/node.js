const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/login", (req, res, next) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`RUN SERVER ON PORT ${port}`);
});

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use(express.json());
