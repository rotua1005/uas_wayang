const db = require("../models");
const moment = require('moment-timezone');
const User = db.user;
  
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      
      if (!users.length) {
        return res.status(404).send({ message: "No users found!" });
      }
  
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).send({ message: "User not found!" });
      }
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }