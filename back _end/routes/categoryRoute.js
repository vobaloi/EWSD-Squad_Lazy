const { createCategory } = require ("../controllers/categoryController")
const express = require ("express");

const router = express.Router();

router.route("/category/new").put(createCategory)

module.exports = router;