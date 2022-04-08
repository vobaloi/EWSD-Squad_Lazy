const router = require("express").Router();

<<<<<<< HEAD
const categoryController = require("./../controllers/categoryController");

router.post("/addCate", categoryController.addCate);
router.get("/getAllCategory", categoryController.getAllCategory);
=======
const { authorizeRoles } = require("../middleware/auth");

router.post("/:depart_id/addCate", categoryController.addCate);
router.get("/categories",  authorizeRoles("admin"), categoryController.getAllCategory);
>>>>>>> phuoc

// router.get("/category/:id", categoryController.getCategoryDetails);

router.put("/updateCategory/:id", categoryController.updateCategory);

router.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = router;
