const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Employee
         .find({})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Employee
         .find({_id: req.params.id})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Employee
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Employee
          .findOneAndUpdate({ _id: req.params.id}, req.body)
          .then(dbModel => req.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Employee
          .findById({ _id: req.params.id})
          .then(dbModel => dbModel.remove())
          .then(dbModel =>res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    login: function(req, res){
        db.Employee
        .findOne({email: req.body.email})
        .then(dbModel => {
            if (dbModel.password === req.body.password){
                let tempObject = {
                   authenticated: true,
                   name: dbModel.name,
                   employeeType: dbModel.employeeType
                }
                res.json(tempObject)
            }
            else {
                let tempObject = {
                    authenticated: false,
                }
                res.status(401).json(tempObject)
            }
            })        

            
        .catch(err => res.status(422).json(err))

    }
}

