const router = require("express").Router();
const middleware = require("./../helpers/middleware");
const departController = require("./../controllers/department.controller");

const { authorizeRoles } = require("../middleware/auth");

router.post("/addDepart", authorizeRoles("admin"), departController.addDepart);
router.get("/departments", authorizeRoles("admin"),departController.departments);
// router.get("/:id", departController.A_departments);
router.put("/:id", departController.update);
router.delete("/:id", departController.delete);

module.exports = router;
