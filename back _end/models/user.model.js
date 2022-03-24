const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const schema = new mongoose.Schema(
  {
    first_name: { type: String, default: "" },
    last_name: { type: String, default: "" },
    email: String,
    password: String,
    profile_image: { type: String, default: "" },
    profession: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

schema.pre("save", function (next) {
  var user = this;
  // băm password nếu nó được sửa đổi
  if (!user.isModified("password")) return next();

  // đây là nó băm theo chuoi 10
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // băm mật khẩu bằng cach su dụng lại một salt mới
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // sau đó ghi đè mậu khẩu bằng  một mật khẩu đã băm
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model("User", schema);

module.exports = User;
