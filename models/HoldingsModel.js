const { mongoose } = require("mongoose");

const  HoldingSchema  = require("../schemas/HoldingsSchema");

const holdings = mongoose.model("holdings", HoldingSchema);

module.exports =  holdings ;