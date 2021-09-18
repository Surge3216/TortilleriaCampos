const express = require('express');
const session = require("express-session");
// const passport = require("./config/passport");

// Sets up the Express App
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Serve up static assets (usually on heroku)
if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tortilleria_campos", { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://root:Kidsergg3216@sergio.xwvti.mongodb.net/tortilleria_campos?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose
  .connect("mongodb+srv://Surge:VkRDVaB5K7BcuU3R@sergio.xwvti.mongodb.net/tortilleria_campos?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .then((res) => {
    console.log(`Server running`);
  })
  .catch(err => {
    console.error(err)
  })
//Add routes, both API and view
app.use(routes);

// Syncing our sequelize models and then starting our express app


app.listen(PORT, () => 
console.log(`Listening on PORT ${PORT}`));