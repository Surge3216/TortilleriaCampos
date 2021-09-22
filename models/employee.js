const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs")

const Schema = mongoose.Schema;

    const employeeSchema = new Schema({
	    role: {
            type: String,
        },
        name: {
            type: String,
        },
        password:{
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
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

  