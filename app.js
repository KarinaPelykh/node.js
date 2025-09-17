const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/user", (req, res) => {
  res.send("<h2>Hello user</h2>");
});
app.get("/user/:id", (req, res) => {
  res.send(`<h2>Contact</h2>Params:${req.params.id}`);
});

app.post("/user/:userid", (req, res) => {
  const id = req.params.id;
  console.log(id);
});

app.listen(port, () => {
  console.log("port 3000");
});

app.use((req, res, next) => {
  next();
});

const sayHi = (name) => {
  console.log(`Helllo${name}`);
};

sayHi("KArynssa");
const strings = require("./theory/theory");
console.log(strings.d);
