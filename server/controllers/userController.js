const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../utils/passwordHelper");
const { loginToken } = require("../utils/jwt_token");
module.exports.registerController = async (req, res) => {
  try {
    const { username, email, password, remember } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already registered." });
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      remember: remember === "true",
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const userData = {
      username: user.username,
      email: user.email,
      remember: user.remember,
      isAdmin: user.isAdmin,
    };
    const token = loginToken(userData);
    res
      .status(200)
      .json({ message: "Login successful", user: userData, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error." });
  }
};
