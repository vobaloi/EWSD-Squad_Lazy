const router = require("express").Router();
const blogController = require("./../controllers/blog.controller");
const middleware = require("./../helpers/middleware");

router.get("/", blogController.list);
router.get("/:blog_id", middleware.api, blogController.details);
router.post("/create", middleware.auth, blogController.create);
// router.put("/:blog_id/update", middleware.auth, blogController.update); //
router.delete("/:blog_id/delete", middleware.auth, blogController.delete); //
router.post(
  "/:blog_id/toggle_like",
  middleware.auth,
  blogController.toggle_like
);
router.post(
  "/:blog_id/toggle_dislike",
  middleware.auth,
  blogController.toggle_dislike
);

module.exports = router;

// "email": "trongnhan2@gmail.com",
//   "password": "0925980058"
