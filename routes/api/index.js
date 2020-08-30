const router = require("express").Router();
const coffeeshopRoutes = require("./coffeeshops");

// Book routes
router.use("/coffeeshops", coffeeshopRoutes);


module.exports = router;
