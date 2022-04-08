
const Account = require ("../models/accounts.model");
const ErrorHander = require("./errorHander");

exports.authorizeRoles = (...roles) => {

    return (req,res,next) => {
        

        if(!roles.includes(req.user.role)){
            return next(
                new ErrorHander(
                    `Roles: ${req.user.role} is not allowed this resource`,403
                    )
            );
        }
       

        next();
    };
};