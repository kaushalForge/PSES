const bcrypt = require("bcrypt");

module.exports.hashPassword = async (pwd) => {
  try {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    const hash = await bcrypt.hash(pwd, salt);
    return hash;
  } catch (error) {
    console.error("Error hashing:", error);
  }
};

module.exports.comparePassword = async (plainPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};
