const express = require("express");

const app = express();

const cors = require("cors");

const usersRoutes = require("./routes/api/users");

const authRouters = require("./routes/api/auth");

app.use("/api/users", usersRoutes);

app.use("/api/auth", authRouters);

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use(cors());

app.use(express.json());

module.exports = {
  app,
};
