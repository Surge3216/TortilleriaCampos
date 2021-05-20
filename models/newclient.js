const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const newclientSchema = new Schema({
	    clientType: {
            type: String,
        },
        clientName: {
            type: String,
        },
        clientNumber: {
            type: Number,
        },
        clientEmailAddress: {
            type: String,
        },
        clientStreetAddress: {
            type: String,
        },
        clientCity: {
            type: String,
        },
        clientState: {
            type: String,
        },
        clientZip: {
            type: Number,
        },
        clientStatus: {
            type: String,
            trim: true
        },
	    clientNotes: {
            type: String,
        }
    });

    const NewClient = mongoose.model("NewClient", newclientSchema);

    module.exports = NewClient;

  