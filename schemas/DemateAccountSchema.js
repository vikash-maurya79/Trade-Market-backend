const mongoose = require('mongoose');

const DemateSchema = new mongoose.Schema({
    accountNumber: Number,
    ifscCode: String,
    amount: Number,
    accountOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
module.exports = DemateSchema;