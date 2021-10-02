const jwt = require('jsonwebtoken')
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
        let getEmployee;
        db.Employee.findOne({
            email: req.body.email
        })
        .then((employee)=>{
            if(!employee) {
                return res.status(401).json({
                    message: 'Authentication failed'
                });
            }
            getEmployee = employee;
            return (req.body.password === employee.password)
        })
        .then((response)=>{
            if (!response){
                return res.status(401).json({
                    message: 'Authentication failed'
                });
            }
            let jwttoken = jwt.sign(
                {
                    username: getEmployee.name,
                    email: getEmployee.email,
                    userId: getEmployee._id,
                    role: getEmployee.role 
                },
                'my-long-secret',
                {
                    expiresIn: '1h'
                }
            );
            res.status(200).json({
                token: jwttoken,
                expiresIn: 1000,
                msg: getEmployee
            })
            .catch((err) => {
                return res.status(401).json({
                    message: 'Authentication failed',
                });
            });
        })
    }
}

