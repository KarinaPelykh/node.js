const path = require("path");

const { writeFile, readFile } = require("fs/promises");

const userPath = path.join(__dirname, "./users.json");

const readUser = async () => {
  const users = await readFile(userPath, "utf8");
  const res = JSON.parse(users);
  return res;
};

const getUsers = async (req, res) => {
  const users = await readUser();

  res.send(users);
};

const createUser = async (req, res) => {
  const allUsers = await readUser();

  const { name, email, age } = req.body;

  if (req.body) {
    const newUser = {
      name,
      email,
      age,
      id: new Date(),
    };

    allUsers.push(newUser);

    await writeFile(userPath, JSON.stringify(allUsers, null, 2));
    res.status(200).json("User added");
  }
};

const getUserById = async (req, res) => {
  const users = await readUser();
  const { id } = req.params;

  const result = users.find((user) => user.id === id);

  res.json(result);
};

module.exports = {
  readUser,
  getUsers,
  createUser,
  getUserById,
};
