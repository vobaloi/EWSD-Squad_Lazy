const Account = require("../models/accounts.model");
exports.authorizeRoles = (...roles) => {
  return (req, next) => {

    next();
  };
};
