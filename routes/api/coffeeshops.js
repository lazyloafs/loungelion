const router = require("express").Router();
const coffeeshopsController = require("../../controllers/coffeeshopsController");

// Matches with "/api/books"
router.route("/")
  .get(coffeeshopsController.findAll)
  .post(coffeeshopsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(coffeeshopsController.findById)
  .put(coffeeshopsController.update)
  .delete(coffeeshopsController.remove);

module.exports = router;
