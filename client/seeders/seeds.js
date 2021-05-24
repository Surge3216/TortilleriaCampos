let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/products", {
  useNewUrlParser: true
});

var productSeed = [
    {
        item:"10' flour",
        price: 6.99
    },
    {
        item:"6' flour",
        price: 3.99
    },
    {
        item:"8' flour",
        price: 4.99
    },
    {
        item:"Mesa",
        price: 3.99
    },
    {
        item:"3' Taco",
        price: 3.99
    },
],