const router = require("express").Router();
const middleware = require("./../helpers/middleware");
const categoryController = require("./../controllers/categoryController");

const { authorizeRoles } = require("../middleware/role");

router.post("/addCate", categoryController.addCate);
router.get("/getAllCategory", categoryController.getAllCategory);

router.get("/category/:id", categoryController.getCategoryDetails);

router.put("/category/:id", categoryController.editCategory);

router.delete("/category/:id", categoryController.deleteCategory);

module.exports = router;
