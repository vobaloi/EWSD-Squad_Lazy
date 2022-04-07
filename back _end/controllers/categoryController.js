const Category = require("../models/category.model");
const mongoose = require("mongoose");
const depart = require("../models/department.model");
const { Validator } = require("node-input-validator");

// create new category
// truyền xuống tên depart, tìm trong depart có trong db có thì em lưu
exports.addCate = async (req, res) => {
  let depart_id = req.params.depart_id;
  if (!mongoose.Types.ObjectId.isValid(depart_id)) {
    return res.status(400).send({
      message: "Invalid blog id",
      data: {},
    });
  }
  depart
    .findOne({ _id: depart_id })
    .then(async (blog) => {
      if (!blog) {
        return res.status(400).send({
          message: "No blog found",
          data: {},
        });
      } else {
        try {
          const v = new Validator(req.body, {
            comment: "required",
          });
          const matched = await v.check();
          if (!matched) {
            return res.status(422).send(v.errors);
          }

          let newCommentDocument = new BlogComment({
            comment: req.body.comment,
            blog_id: blog_id,
            user_id: req.user._id,
          });

          let commentData = await newCommentDocument.save();
          console.log("nhanel", commentData);
          await depart.updateOne(
            { _id: depart_id },
            {
              $push: { blog_comments: commentData._id },
            }
          );

          let query = [
            {
              $lookup: {
                from: "accounts",
                localField: "user_id",
                foreignField: "_id",
                as: "user",
              },
            },
            { $unwind: "$user" },
            {
              $match: {
                _id: mongoose.Types.ObjectId(commentData._id),
              },
            },
            {
              $project: {
                _id: 1,
                comment: 1,
                blog_id: 1,
                user_id: 1,
                "user.email": 1,
                "user.name": 1,
                // "user.password": 1,
              },
            },
          ];

          let comments = await BlogComment.aggregate(query);

          return res.status(200).send({
            message: "Comment successfully added",
            data: comments[0],
          });
        } catch (err) {
          return res.status(400).send({
            message: err.message,
            data: err,
          });
        }
      }
    })
    .catch((err) => {
      return res.status(400).send({
        message: err.message,
        data: err,
      });
    });
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
