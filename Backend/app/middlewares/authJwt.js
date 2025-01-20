const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

const verifyToken = async (req, res, next) => {
  try {
    // Ambil header Authorization
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).send({ message: 'No token provided!' });
    }

    // Ambil token dari header
    const token = authHeader.split(' ')[1];

    const decoded = await jwt.verify(token, config.secret);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized!" });
  }
};

const authJwt = {
  verifyToken,
};

module.exports = authJwt;
