const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");

const tempUpload = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempUpload,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

const userUpload = path.join(__dirname, "public", "avatars");

// app.post("/api/user", async (req, res) => {
//   const { path: tempUpload, originalname } = req.file;
//   const resUpload = path.join(userUpload, originalname);
//   await fs.rename(tempUpload, resUpload);
//   const cover = path.join("public", "user", originalname);

//   const newUser = {
//     id: new Date(),
//     ...req.body,
//     cover,
//   };

//   users.push(newUser);

//   res.status(201).json(newUser);
// });
module.exports = upload;
