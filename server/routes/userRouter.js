const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
} = require("../controllers/userController");

router.post("/login", loginController, (req, res) => {});

router.post("/register", registerController, (req, res) => {});

module.exports = router;
