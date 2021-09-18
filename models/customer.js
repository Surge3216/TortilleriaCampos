const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const customerSchema = new Schema({
        companyName: {
            type: String,
            allowNull: false,
        },
        contactName: {
            type: String,
            allowNull: false,
        },
        phoneNumber: {
            type: Number,
        },
        email: {
            type: String,
        },
        streetAddress: {
            type: String,
        },
        streetAddress2: {
            type: Number,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: Number,
        },
	relationshipStatus: {
	    type: Boolean
	},
	customerNotes: {
	    type: String,
	}
    });

    const Customer = mongoose.model("Customer", customerSchema);

    module.exports = Customer;