const router = require("express").Router();
const newClientController = require("../../controllers/newclientController")

router.route("/")
.get(newClientController.findAll)
.post(newClientController.create);

router  
.route("/:id")
.get(newClientController.findById)
.put(newClientController.update)
.delete(newClientController.remove);

module.exports = router;