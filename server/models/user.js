var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true,
        },
        lname: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            default: null,
        },
        isPremiumed: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
