const path = require("path");
const router = require("express").Router();
const orderRoutes = require("./orders");
const employeeRoutes = require("./employee");

// API Routes
router.use("/orders", orderRoutes);
router.use("/employee", employeeRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
