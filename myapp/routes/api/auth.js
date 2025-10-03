const express = "express";

const router = express.Route();

const { upload, auth } = require("../../middlewares/auth");

const ctrl = require("../../controllers/auth.js");

const { schema } = require("../../models/user");

router.post("/register", schema.registerSchema, ctrl.register);

router.post("/login", ctrl.login);

router.patch("/avatars", auth, upload.single("avatar"));

module.exports = router;
