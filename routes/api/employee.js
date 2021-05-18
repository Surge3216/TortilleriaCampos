const router = require("express").Router();
const passport = require("passport");

router
    .route("/login")
    .post(passport.authenticate('local'), (req, res) => {
        res.json(req.user)
    })
    axios.post('/api/user', { email: email, password: password }).then(response => setUser(response.data))
    router.route('/')
    .post((req, res) => {
        const user = new db.User(req.body);
        user.save();
    })