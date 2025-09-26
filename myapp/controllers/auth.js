const { User } = require("../models/user.js");

const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw Error(409, "Email already in use");
  }

  const hasPassword = await bcrypt.hashSync(password, 10);

  const newUser = await User.create({ ...req.body, hasPassword });

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

module.exports = { register, login };
