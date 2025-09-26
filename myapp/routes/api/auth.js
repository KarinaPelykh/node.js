const express = "express";

const router = express.Route();

const ctrl = require("../../controllers/auth.js");

const { schema } = require("../../models/user");

router.post("/register", schema.registerSchema, ctrl.register);

// router.post("/login", ctrl.login);
module.exports = router;
