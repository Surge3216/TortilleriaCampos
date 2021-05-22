const router = require("express").Router();
const passport = require("../../config/passport");
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

//future intergartaion for passport
// router
// .route("/login")
// .post(passport.authenticate('local'), (req, res) => {
//      res.json(req.user)
//  })
   

module.exports = router;