const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const ordersSchema = new Schema({
        userID: {
            type: Number,
        },
	    orderStatus: {
            type: String,
        },
        deliveryDate: {
            type: Date,
        },
        orderNotes: {
            type: String,
        },
        cornQuantity: {
            type: Number,
        },
        flourQuantity: {
            type: Number,
        },
    });

    const Orders = mongoose.model("Orders", ordersSchema);

    module.exports = Orders;