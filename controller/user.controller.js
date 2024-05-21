const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const secretKey = "seomesec555353535";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = userModel.find((u) => u.email === email);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({
      message: "err",
    });
  }
};

const getUser = async (req, res) => {
  const user = req.user;

  return res.status(200).json({
    user,
  });
};

module.exports = {
  login,
  getUser,
};
