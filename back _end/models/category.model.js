const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    Deapart_id : { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    name_category: String,
    start_day: Date,
    end_day: Date,
    user: {
      type: mongoose.Schema.ObjectId, 
      ref: "Account",
      require: true
    }
    
  },
  {
    timestamps: true,
  },
  

);

const Category = mongoose.model("Category", schema);
module.exports = Category;


// user: {
//   type: mongoose.Schema.ObjectId,
//   ref: "User",
//   required: true,
// },
