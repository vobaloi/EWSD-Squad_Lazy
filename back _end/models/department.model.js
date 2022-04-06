const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name_department: String,
  description: String,
  owner: String,
  user_owner: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
});

const Department = mongoose.model("Department", schema);
module.exports = Department;
