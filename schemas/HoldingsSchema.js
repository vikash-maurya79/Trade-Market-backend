const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
module.exports = HoldingSchema;