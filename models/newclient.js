const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const clientSchema = new Schema({
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

    const Client = mongoose.model("Client", clientSchema);

    module.exports = Client;

  