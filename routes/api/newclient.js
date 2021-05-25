const router = require("express").Router();
const newClientController = require("../../controllers/newclientController")
// /api/newclient/

router.route("/")
.get(newClientController.findAll)
.post(newClientController.create);

// /api/newclient/

router  
.route("/:id")
.get(newClientController.findById)
.put(newClientController.update)
.delete(newClientController.remove);

module.exports = router;