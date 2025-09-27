const express = require("express");

const router = express.Router();

const { getUsers, createUser, getUserById } = require("../../user");

const { auth } = require("../../middlewares");

router.get("/", auth, getUsers);

router.post("/", auth, createUser);

router.get("/:id", auth, getUserById);

router.delete("/:id", (req, res) => {
  res.json({ message: `User with id ${req.params.id} deleted (mock)` });
});

module.exports = router;
