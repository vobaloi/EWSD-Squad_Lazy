const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: String,
    start_day: Date,
    end_day: Date,
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", schema);
module.exports = Category;
