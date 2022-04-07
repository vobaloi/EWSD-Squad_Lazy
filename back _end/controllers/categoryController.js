const Category = require("../models/category.model");
const department = require("../models/department.model");
const mongoose = require("mongoose");
const depart = require("../models/department.model");
const { Validator } = require("node-input-validator");

// create new category
// truyền xuống tên depart, tìm trong depart có trong db có thì em lưu
exports.addCate = async (req, res) => {
  const v = new Validator(req.body, {
    name_category:
      "required|minLength:5|maxLength:100|unique:Department,name_department",
    description: "required",
    name_depart: "required",
  });
  const matched = await v.check();
  if (!matched) {
    return res.status(422).send(v.errors);
  }
  try {
    const checkDepart = await department.findOne({
      name_department: req.body.name_depart,
    });
    console.log(checkDepart._id);

    if (checkDepart) {
      const newCate = new Category({
        name_category: req.body.name_category,
        description: req.body.description,
        name_depart: req.body.name_depart,
        departs: checkDepart._id,
      });
      const saveCate = await newCate.save();
      if (checkDepart._id) {
        const cate = department.findById(checkDepart._id);
        await cate.updateOne({ $push: { categorys: saveCate._id } });
      }
      res.status(200).json(saveCate);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL CATEGORY
exports.getAllCategory = async (req, res) => {
  const categories = await Category.find();
  const categoriesCount = await Category.countDocuments();

  res.status(200).json({
    success: true,
    categoriesCount,
    categories,
  });
};

// GET CATEGORY DETAILS
exports.getCategoryDetails = async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).send({
      message: "Category not found",
    });
  }

  res.status(200).json({
    success: true,
    category,
  });
};

// Edit Category
exports.editCategory = async (req, res) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).send({
      message: "Category not found",
    });
  }

  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    category,
  });
};

// Delete Category
exports.deleteCategory = async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).send({
      message: "Category not found",
    });
  }
  await category.remove(),
    res.status(200).json({
      success: true,
      message: "Category delete successfully",
    });
};
