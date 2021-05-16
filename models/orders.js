const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const ordersSchema = new Schema({
        userID: {
            type: Number,
        },
	    orderStatus: {
            type: String,
        },
        dateCreated: {
            type: Date,
            default: Date.now
        },
        deliveryDate: {
            type: Date,
        },
        dateClosed: {
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
        dueDate: {
            type: Date,
        },
        rate: {
            type: Number,
        }

    });

    const Orders = mongoose.model("Orders", ordersSchema);

    module.exports = Orders;