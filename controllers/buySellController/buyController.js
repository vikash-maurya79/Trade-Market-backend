
const order = require('../../models/OrderModel.js');
const User = require("../../models/UserModel.js");
const { averageCalculator, quantityCalculator } = require('./calculator.js');

const buyController = async (req, res) => {
    if (!req.body.quantity ||
        !req.body.amount ||
        !req.body.mode) {
        return res.status(400).json({
            message: 'fill required fields carefully'
        })
    }
    if (!req.body.name) {
        return res.status(401).json({
            message: 'Login is required'
        })
    }
    let tempOrder = new order({
        name: req.body.name,
        qty: req.body.quantity,
        price: req.body.amount,
        mode: req.body.mode
    })
    let comp_name = req.body.name;
    let checkHolding = await holdings.find(
        { name: comp_name, user: req.user.id }
    );
    if (checkHolding.length > 0) {


        let updateHoldings = {
            qty: quantityCalculator(req.body.quantity, checkHolding[0].qty),
            avg: averageCalculator(req.body.amount, req.body.quantity, checkHolding[0].avg),
            price: quantityCalculator(req.body.amount, checkHolding[0].price),
            net: req.body.amount,
            day: '+1%',
        }
        await holdings.findOneAndUpdate(
            { name: comp_name },
            { $set: updateHoldings },
            { new: true }

        );
    }
    else {
        let avrg = Number(Number(req.body.amount) / Number(req.body.quantity));
        let tempHolding = new holdings({
            name: req.body.name,
            qty: req.body.quantity,
            avg: avrg,
            price: req.body.amount,
            net: req.body.amount,
            day: '+1%',
            user: req.user.id
        })
        let savedHolding = await tempHolding.save();
        let userFound = await User.findOne({ _id: req.user.id });
        userFound.holding.push(savedHolding._id);
        await userFound.save();
    }
    tempOrder.save();
    res.status(200).json({
        message: 'Order done !'
    })
}
module.exports = { buyController };
