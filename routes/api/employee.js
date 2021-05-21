const router = require("express").Router();
const passport = require("passport");
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
    .post(passport.authenticate('local'), (req, res) => {
        res.json(req.user)
    })
    axios.post('/api/user', { email: email, password: password }).then(response => setUser(response.data))
    
    router.route('/')
    .post((req, res) => {
        const user = new db.user(req.body);
        user.save();
    })

    module.exports = router;