const holdings = require("../../models/HoldingsModel");

const sellController = async (req, res) => {
    try {
        let foundedHolding = await holdings.findOne({
            _id: req.body.stockId,
            user: req.user.id
        });

        if (!foundedHolding) {
            return res.status(404).json({
                message: 'Data not found'
            });
        }

        const availableQty = foundedHolding.qty;
        const sellQty = req.body.stockQty;

        if (!sellQty || sellQty <= 0) {
            return res.status(400).json({
                message: 'Invalid quantity'
            });
        }

        if (sellQty > availableQty) {
            return res.status(400).json({
                message: 'Somthing went wrong'
            });
        }
        const remainingQty = availableQty - sellQty;
        if (remainingQty === 0) {
            console.log('running first step');
            await foundedHolding.deleteOne();

            return res.status(200).json({
                message: 'Order successfull'
            });
        }
        foundedHolding.qty = remainingQty;
        await foundedHolding.save();

        return res.status(200).json({
            message: 'Order done !'
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}
module.exports = { sellController };