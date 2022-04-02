const router = require("express").Router();
const authController = require("../controllers/authentication.controller");
router.post("/register", authController.register);
router.post("/login", authController.login);
module.exports = router;
