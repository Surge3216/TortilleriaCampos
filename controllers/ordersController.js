const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Orders
         .find(req.query)
         .sort({ date: -1})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Orders
         .find({userID:req.params.id})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Orders
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Orders
          .findOneAndUpdate({ _id: req.params.id}, req.body)
          .then(dbModel => req.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Orders
          .findById({ _id: req.params.id})
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    }
}