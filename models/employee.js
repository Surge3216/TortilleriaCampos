const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const employeeSchema = new Schema({
	    employeeType: {
            type: String,
        },
        employeeName: {
            type: String,
        },
        phoneNumber: {
            type: Number,
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

  