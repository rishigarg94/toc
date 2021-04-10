var mongoose = require("mongoose");
var requestSchema = new mongoose.Schema(
    {
        hash: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true,
        },
        name: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        bgrp: {
            type: String,
            required: true,
        },
        cno: {
            type: Number,
            required: true
        },
        eCno: {
            type: Number,
            required: true
        },
        pa: {
            type: Number,
            required: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Request", medicineSchema);
