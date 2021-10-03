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
        phone: {
            type: Number,
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zip: {
            type: Number,
        },
	relationshipStatus: {
	    type: String
	},
	customerNotes: {
	    type: String,
	},
    orders: {
	    type: Array,
        default: [],
	}
    });

    const Customer = mongoose.model("Customer", customerSchema);

    module.exports = Customer;