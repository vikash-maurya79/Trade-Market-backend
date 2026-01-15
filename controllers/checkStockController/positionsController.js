const position = require("../../models/PositionModel");

const positionsController = async (req, res) => {
    let positionData = await position.find({});
    res.json(positionData);
}
module.exports = { positionsController };