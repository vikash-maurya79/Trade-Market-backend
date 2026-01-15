
const {mongoose} = require("mongoose");
const PositionSchema = require("../schemas/PositionsSchema");

const position = new mongoose.model("position", PositionSchema);
module.exports =position;