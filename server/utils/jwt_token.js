const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports.loginToken = (user) => {
  try {
    const expiresIn = user.remember ? "7d" : "2d";
    return jwt.sign(user, JWT_SECRET, { expiresIn });
  } catch (error) {
    console.error("JWT signing error:", error);
    throw error;
  }
};