const { Validator } = require("node-input-validator");

const user = require("../models/accounts.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Account = require("../models/accounts.model");

// REGISTER
exports.register = async (req, res) => {
  const v = new Validator(req.body, {
    email: "required|email|unique:Account,email",
    password: "required",
    username: "required",
    role: "required",
  });

  const matched = await v.check();

  if (!matched) {
    return res.status(422).send(v.errors);
  }

  try {
    const newUser = new user({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      role: req.body.role,
    });

    let userData = await newUser.save();
    return res.status(200).send({
      message: "Registration successfull",
      data: userData,
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
      data: err,
    });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const v = new Validator(req.body, {
    email: "required|email",
    password: "required",
  });
  // console.log("v từ body", v);
  const matched = await v.check();

  if (!matched) {
    return res.status(422).send(v.errors);
  }

  try {
    let userData = await user.findOne({ email: req.body.email });
    if (userData) {
      if (bcrypt.compareSync(req.body.password, userData.password)) {
        let jwt_secret = process.env.JWT_SECRET || "mysecret";
        let token = jwt.sign(
          {
            data: userData,
          },
          jwt_secret,
          { expiresIn: "12h" }
        );

        return res.status(200).send({
          message: "Login successfull",
          data: userData,
          token: token,
        });
      } else {
        return res.status(400).send({
          message: "Incorrect credentials",

        });
      }
    } else {
      return res.status(400).send({
        message: "User is not registered",

      });
    }
  } catch (err) {
    return res.status(400).send({
      message: err.message,

    });
  }
};

// GET ALL USERS
exports.getAllUser = async (req, res, next) => {
  try {
    const users = await Account.find();
    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send({
      error: error,
    });
  }
};

// DELETE USER
exports.deleteUser = async (req, res) => {
  const user = await Account.findById(req.params.id);

  // IT WILL REMOVE CLOUDINARY LATER
  if (!user) {
    return res.status(400).send({
      message: `User does not exist with Id: ${req.params.id}`,
    });
  }
  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted successfully",
  });
};
