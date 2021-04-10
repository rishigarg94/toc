var mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");

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
    },
    { timestamps: true }
);

medicineSchema.method("transform", function () {
    let obj = this.toObject();
    obj.id = obj._id;
    delete obj._id;
    return obj;
});


module.exports = mongoose.model("Medicine", medicineSchema);
