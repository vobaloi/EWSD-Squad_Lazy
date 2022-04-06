
const Account = require ("../models/accounts.model");


exports.authorizeRoles = (...roles) => {

    return (req,next) => {

        if(!roles.includes(req.user.role)){

            return next(
                 new (
            `Roles: ${req.user.role} is not allowed this resource`, 403
                )
            );
        }

        next();
    };
};