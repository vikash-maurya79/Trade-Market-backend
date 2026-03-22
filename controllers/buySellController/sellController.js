const DemateAccount = require("../../models/DemateAccountModel");
const holdings = require("../../models/HoldingsModel");

const sellController = async (req, res) => {
    try {
        let foundedHolding = await holdings.findOne({
            _id: req.body.stockId,
            user: req.user.id
        });

        let accountFound = await DemateAccount.findOne({ accountOwner: req.user.id });
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
        let price_per_stock = foundedHolding.price;
        let total_price = Number(price_per_stock * sellQty);
        const remainingQty = availableQty - sellQty;
        if (remainingQty === 0) {
            await foundedHolding.deleteOne();
            accountFound.amount += total_price;
            let accountData = await accountFound.save();
            return res.status(200).json({
                message: 'Order successfull',
                data: accountData
            });
        }
        foundedHolding.qty = remainingQty;
        await foundedHolding.save();
        accountFound.amount += total_price;
        let accountData = await accountFound.save();

        return res.status(200).json({
            message: 'Order done !',
            data: accountData
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}
module.exports = { sellController };