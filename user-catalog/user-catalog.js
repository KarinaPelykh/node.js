const fs = require("fs").promises;

const path = require("path");

const userCollectionPath = path.join(__dirname, "./filtered-users.json");

const featUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const filterUsersByCity = (users, cityName) =>
  users.filter((user) => user.address.city === cityName);

const saveUsersToFile = async (users) => {
  const userCollection = await fs.readFile(userCollectionPath, "utf-8");
  const userCOll = JSON.parse(userCollection);

  userCOll.push(...users);

  await fs.writeFile(userCollectionPath, JSON.stringify(userCOll, null, 2));
};

const main = async () => {
  try {
    const users = await featUser();

    const filteredUsers = filterUsersByCity(users, users[2].address.city);
    await saveUsersToFile(filteredUsers);
  } catch (error) {
    console.log(error);
  }
};

main();

module.exports = {
  featUser,
};
