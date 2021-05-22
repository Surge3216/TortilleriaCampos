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

    employeeSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      employeeSchema.pre('save', async function save(next) {
        if (!this.isModified('password')) return next();
        try {
          const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
          this.password = await bcrypt.hash(this.password, salt);
          return next();
        } catch (err) {
          return next(err);
        }
      });

    const Employee = mongoose.model("Employee", employeeSchema);

    module.exports = Employee;

  