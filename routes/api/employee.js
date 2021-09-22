const router = require("express").Router();
const employeeController = require("../../controllers/employeeController")

router.route("/")
.get(employeeController.findAll)
.post(employeeController.create);

router  
.route("/:id")
.get(employeeController.findById)
.put(employeeController.update)
.delete(employeeController.remove);

router
.route("/login")
.post(employeeController.login);

module.exports = router;