const express = require("express");

const router = express.Router();

const { getUsers, createUser, getUserById } = require("../../user");

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id", (req, res) => {
  res.json({ message: `User with id ${req.params.id} deleted (mock)` });
});

module.exports = router;
