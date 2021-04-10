var mongoose = require("mongoose");
var medicineSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true,
        },
        image: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        tags: {
            type: [String],
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);
