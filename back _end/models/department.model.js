const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name_department: String,
  description: String,
  // owner: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
  owner: String,
});

const Department = mongoose.model("Department", schema);
module.exports = Department;
