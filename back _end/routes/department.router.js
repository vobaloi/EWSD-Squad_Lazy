const router = require("express").Router();
const middleware = require("./../helpers/middleware");
const departController = require("./../controllers/department.controller");
router.post(
  "/addDepart",
  //  middleware.auth,
  departController.addDepart
);
router.get("/departments", departController.departments);
// router.get("/:id", departController.A_departments);
router.put("/:id", departController.update);
router.delete("/:id", departController.delete);

module.exports = router;
