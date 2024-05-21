const jwt = require("jsonwebtoken");

const secretKey = "seomesec555353535";
const Authenticated = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Failed to authenticate token" });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    return res.status(403).json({ message: "Failed to authenticate token" });
  }
};

module.exports = Authenticated;
