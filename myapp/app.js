const express = require("express");

const app = express();

const cors = require("cors");

const usersRoutes = require("./routes/api/users");

app.use("/api/users", usersRoutes);

console.log("kfmdlSFSKLF");

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use(cors());

app.use(express.json());

module.exports = {
  app,
};
