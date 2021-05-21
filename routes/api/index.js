const path = require("path");
const router = require("express").Router();
const orderRoutes = require("./orders");
const customerRoutes = require("./customer");
const employeeRoutes = require("./employee");
const newclientRoutes = require("./newclient");

// API Routes
router.use("/orders", orderRoutes);
router.use("/customer", customerRoutes);
router.use("/employee", employeeRoutes);
router.use("/newclient", newclientRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
