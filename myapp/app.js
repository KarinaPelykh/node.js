const express = require("express");
const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`RUN SERVER ON PORT ${port}`);
});

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use(express.json());

module.exports = {
  app,
};
