const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs")

const Schema = mongoose.Schema;

    const employeeSchema = new Schema({
	    employeeType: {
            type: String,
        },
        employeeName: {
            type: String,
        },
        password:{
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        emailAddress: {
            type: String,
        },
        employeeStatus: {
            type: String,
            trim: true
        },
	      employeeNotes: {
            type: String,
        }
    });

    const Employee = mongoose.model("Employee", employeeSchema);

    module.exports = Employee;

  