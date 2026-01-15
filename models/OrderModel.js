const { mongoose } = require("mongoose");
const OrderSchema = require('../schemas/OrderSchema.js');

const order = new mongoose.model("order", OrderSchema);

module.exports = order;