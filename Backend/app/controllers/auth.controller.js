const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });

    await user.save();

    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username
    })

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, config.secret, {
      expiresIn: 86400 // 24 hours
    });


    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.changePass = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    const oldPasswordIsValid = bcrypt.compareSync(req.body.oldPassword, user.password);
    if (!oldPasswordIsValid) {
      return res.status(401).send({ message: "Old password is incorrect." });
    }

    const newPassword = bcrypt.hashSync(req.body.newPassword, 8);
    await User.findByIdAndUpdate(req.userId, { password: newPassword });

    res.status(200).send("Password successfully changed.");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
