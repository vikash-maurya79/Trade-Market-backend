
const WatchList = require("../../models/WatchListModel.js");


const viewStockController = async (req, res) => {
    let stock_id = req.params;
    if (!mongoose.Types.ObjectId.isValid(stock_id)) {
        return res.status(404).json({
            message: 'Somthing is broken'
        })
    }
    let watchlistFound = await WatchList.findOne({
        _id: new mongoose.Types.ObjectId(stock_id),
    })
    if (!watchlistFound) {
        return res.status(404).json({
            message: 'Not found'
        })
    }
    res.status(200).json({
        message: 'Success',
        data: watchlistFound
    })

}
module.exports = { viewStockController };