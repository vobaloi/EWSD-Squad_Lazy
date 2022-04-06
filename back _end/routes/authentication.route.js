const router = require("express").Router();
const authController = require("../controllers/authentication.controller");
router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/users", authController.getAllUser);

router.delete("/user/:id", authController.deleteUser);
module.exports = router;
