const WatchList = require("../../models/WatchListModel.js");

const watchlistController = async (req, res) => {
    let watchlistData = await WatchList.find({});
    res.json(watchlistData);
}
module.exports = { watchlistController };