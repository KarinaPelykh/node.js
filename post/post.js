const fs = require("fs").promises;

const path = require("path");

const postPath = path.join(__dirname, "./post.json");

const API_URL = "https://jsonplaceholder.typicode.com";

const getUser = async () => {
  const res = await fetch(`${API_URL}/users`);
  const data = await res.json();

  return data;
};

const getUserPostById = async (userId) => {
  const res = await fetch(`${API_URL}/posts?userId=${userId}`);
  const data = await res.json();

  return data;
};

const filterByName = (users) => {
  return users.find((user) => user.username === "Bret");
};

const getAllPostFromDb = async () => {
  const res = await fs.readFile(postPath, "utf-8");
  const posts = JSON.parse(res);
  return posts;
};

const writePostToDb = async (userPosts) => {
  const posts = await getAllPostFromDb();

  userPosts.forEach((userPost) => {
    const exists = posts.some((post) => post.id === userPost.id);
    if (!exists) {
      posts.push(userPost);
    }
  });

  await fs.writeFile(postPath, JSON.stringify(posts, null, 2));
};

const main = async () => {
  try {
    const users = await getUser();

    const user = filterByName(users);

    if (!user) {
      throw new Error("user not  found");
    }

    const userPosts = await getUserPostById(user.id);

    await writePostToDb(userPosts);
  } catch (error) {
    console.log(error);
  }
};
main();

module.exports = {
  getPost: getUser,
};
