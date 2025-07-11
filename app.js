// globalThis.foo = 74;

// const { log } = require("./index");
// const { listContact, getContactById } = require("./contact");
// const fs = require("fs").promises;

// const callback = (name) => {
//   // console.log(`Hi ${name}`);
// };

// log(callback);

// fs.readdir(__dirname).then((files) => {
//   return Promise.all(
//     files.map(async (filesname) => {
//       const stats = await fs.stat(filesname);
//       return {
//         Name: filesname,
//         Size: stats.size,
//         Date: stats.mtime,
//       };
//     })
//   );
// });
// // .then((result) => console.log(result));

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
