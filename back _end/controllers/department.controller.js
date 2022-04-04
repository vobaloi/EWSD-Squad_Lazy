const { Validator } = require("node-input-validator");
const Department = require("../models/department.model");
const mongoose = require("mongoose");
const fs = require("fs");
const { TokenExpiredError } = require("jsonwebtoken");

exports.addDepart = async (req, res) => {
  const v = new Validator(req.body, {
    name_department:
      "required|minLength:5|maxLength:100|unique:Department,name_department",
    description: "required",
    owner: "required",
  });
  const matched = await v.check();
  if (!matched) {
    return res.status(422).send(v.errors);
  }
  try {
    const newDepart = new Department({
      name_department: req.body.name_department,
      description: req.body.description,
      owner: req.body.owner,
    });
    console.log("newDepart", newDepart);
    let userDepart = await newDepart.save();
    // let query = [
    //   {
    //     $lookup: {
    //       from: "accounts",
    //       localField: "owner",
    //       foreignField: "_id",
    //       as: "owner",
    //     },
    //   },
    //   { $unwind: "$owner" },

    //   {
    //     $match: {
    //       _id: mongoose.Types.ObjectId(userDepart._id),
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 1,
    //       name_department: 1,
    //       description: 1,
    //       "owner._id": 1,
    //       "owner.email": 1,
    //     },
    //   },
    // ];
    // let departs = await Department.aggregate(query);

    return res.status(200).send({
      message: "Added successfully",
      //   data: Department.hydrate(departs[0]),
      data: userDepart,
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message,
      data: error,
    });
  }
};

exports.departments = async function (req, res) {
  try {
    const allDepartments = await Department.find();
    res.status(200).send({ allDepartments });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      data: error,
    });
  }
};
