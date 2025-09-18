const path = require("path");
const { app } = require("./app");
const { writeFile, readFile } = require("fs/promises");

const userPath = path.join(__dirname, "./users.json");

const readUser = async () => {
  const users = await readFile(userPath, "utf8");
  const res = JSON.parse(users);
  return res;
};

app.get("/users", async (req, res) => {
  const users = await readUser();
  res.send(users);
});

app.post("/users", async (req, res) => {
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
});

app.get("/users/:id", async (req, res) => {
  const users = await readUser();
  const { id } = req.params;

  const result = users.find((user) => user.id === id);

  res.json(result);
});

async function foo() {
  const res = await fetch("https://api.example.com/data");
  const result = await res.json();
  return result;
}

console.log("hello");
foo();
console.log("it is not asynnchronus func");
