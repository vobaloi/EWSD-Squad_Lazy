const Category = require("../models/category.model");

// create new category
exports.addCate = (async (req,res) => {
    const category = await Category.create(req.body);

    res.status(201).json({
        success: true,
        category,
    });
});

// GET ALL CATEGORY
exports.getAllCategory =( async (req,res) => {

    const categories = await Category.find();
    const categoriesCount = await Category.countDocuments();    

    res.status(200).json({
        success: true,
        categoriesCount,
        categories,
    });

});

// GET CATEGORY DETAILS
exports.getCategoryDetails =( async(req,res,next) => {
   
    const category = await Category.findById(req.params.id);

    if(!category){
        return res.status(400).send({
            message: "Category not found"
        });
    }

    res.status(200).json({
        success:true,
        category,
        
    });
});

// Edit Category
exports.editCategory = ( async(req,res) => {

    let category = await Category.findById(req.params.id);

    if(!category){
        return res.status(400).send
        ({
        message: "Category not found"
        });
    }

    category = await Category.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        category,
    });
});

// Delete Category
exports.deleteCategory = ( async(req,res,next)=> {
    
    const category = await Category.findById(req.params.id);

    if(!category){
        return res.status(400).send
        ({
        message: "Category not found"
        });
    }
    await category.remove(),

    res.status(200).json({
        success:true,
        message:"Category delete successfully"
    });
});