const router = require("express").Router();

const categoryController = require("./../controllers/categoryController");

router.post("/addCate", categoryController.addCate);
router.get("/getAllCategory", categoryController.getAllCategory);

// router.get("/category/:id", categoryController.getCategoryDetails);

router.put("/updateCategory/:id", categoryController.updateCategory);

router.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = router;
