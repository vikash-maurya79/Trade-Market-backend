const holdings = require("../../models/HoldingsModel");

const holdingsController = async (req, res) => {

    let holdingsData = await holdings.find({ user: req.user.id });
    return res.status(200).json(
        holdingsData
    );
}
module.exports = { holdingsController };