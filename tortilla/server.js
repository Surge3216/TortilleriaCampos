const express = require('express');

// Sets up the Express App
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing-Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Serve up static assets (usually on heroku)
if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Add routes, both API and view
app.use(routes);

// Syncing our sequelize models and then starting our express app
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
  app.listen(PORT, () => 
  console.log(`Listening on PORT ${PORT}`));

