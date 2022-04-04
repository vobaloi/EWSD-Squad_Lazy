const router = require("express").Router();
const middleware = require("./../helpers/middleware");
const departController = require("./../controllers/department.controller");
router.post("/addDepart", departController.addDepart);
router.get("/departments", departController.departments);
module.exports = router;
