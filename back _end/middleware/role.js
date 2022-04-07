const Account = require("../models/accounts.model");
const error = require("../middleware/errorHandel");
exports.authorizeRoles = (...roles) => {
  return (req, next) => {
    // console.log("nhanle",req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(
        new error(`Roles: ${req.user.role} is not allowed this resource`, 403)()
      );
    }

    next();
  };
};
