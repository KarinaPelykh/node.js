const { User } = require("../models/user.js");

const path = require("path");

const fs = require("fs/promises");

const gravatar = require("gravatar");

const bcrypt = require("bcrypt");

const avatarDir = path.join(__dirname, "../", "public", "avatars");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw Error(409, "Email already in use");
  }

  const hasPassword = await bcrypt.hashSync(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: hasPassword,
    avatarURL,
  });

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw new Error(401, "Email or password invalid");
  }

  const token = "sdfdfsdf.dfsdfsdf.dsfsdfsdfs";

  res.json({ token });
};

const updateAvatar = async () => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resUpload = path.join(avatarDir, filename);
  await fs.rename(tempUpload, resUpload);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = { register, login, updateAvatar };
