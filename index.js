function log(callback) {
  // console.log(callback);
  // callback("Karina");
  // console.log("Hello, world!");
}

// console.log("Ставлю чайник");

// setTimeout(() => {
//   console.log("Чайник закипів");
// }, 3000);

// console.log("Мию посуд");
// console.log("Пю воду");
// console.log("Говорю із собакою");

module.exports = {
  log,
};

// const promise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     if (!true) {
//       resolve("text was fined yesterday");
//     } else {
//       rejected("Error! Error passed to reject function");
//     }
//   }, 3000);
// }).then((data) => {
//   console.log("data", data);
// });
// console.log(promise);

// const fun = async () => {
//   const user = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await user.json();
//   console.log(users);
// };
// console.log(fun());

const fs = require("fs").promises;
fs.readFile("./contacts.json", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

const getList = async () => {
  const contact = await fs.readFile("./contacts.json", "utf-8");
  return await contact.json();
};
