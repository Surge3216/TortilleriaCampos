const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const userSchema = new Schema({
	userType: {
            type: String,
        },
        userName: {
            type: String,
        },
        phoneNumber: {
            type: Number,
        },
        emailAddress: {
            type: String,
        },
        streetAddress: {
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
        userStatus: {
            type: String,
            trim: true
        },
	userNotes: {
            type: String,
        }
    });

    const User = mongoose.model("User", userSchema);

    module.exports = User;

  