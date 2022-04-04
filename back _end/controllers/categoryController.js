const Category = require("../models/category.model");

exports.createCategory = (async (req,res) => {
    const category = await Category.create(req.body);

    res.status(201).json({
        success: true,
        category,
    });

});