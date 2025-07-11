const fs = require("fs").promises;

const path = require("path");

const userCollectionPath = path.join(__dirname, "./filtered-users.json");

const featUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

featUser()
  .then((users) => {
    console.log(users);
    if (!users) {
      return null;
    }

    filterUsersByCity(users, users[2].address.city);
  })
  .catch((error) => console.log(error));

const filterUsersByCity = (users, cityName) => {
  const filteredUser = users.filter((user) => user.address.city === cityName);

  saveUsersToFile(filteredUser);
};

const saveUsersToFile = async (users) => {
  const userCollection = await fs.readFile(userCollectionPath, "utf-8");
  const userCOll = JSON.parse(userCollection);

  userCOll.push(...users);

  await fs.writeFile(userCollectionPath, JSON.stringify(userCOll, null, 2));
};

module.exports = {
  featUser,
};
