const router = require("express").Router();
const coffeeshopRoutes = require("./coffeeshops");

// Shop routes
router.use("/coffeeshops", coffeeshopRoutes);
router.use("/", (req, res) =>{
    res.send({
        message: "Hoping it works"
    })
})

module.exports = router;
