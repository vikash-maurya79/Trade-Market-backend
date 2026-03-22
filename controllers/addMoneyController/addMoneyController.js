const User = require('../../models/UserModel');
const bcrypt = require('bcrypt');
const DemateAccount = require('../../models/DemateAccountModel')
const addMoneyController = async (req, res) => {
    let { amount, password } = req.body;
     if (!amount || !password) {
        return res.status(400).json({
            message: 'Fill all required fields'
        })
    }
    let userFound = await User.findById(req.user.id);
    let flag = await bcrypt.compare(password, userFound.password);
    if (flag) {
        let demateAccountFound = await DemateAccount.findOne({ accountOwner: userFound._id });
        demateAccountFound.amount += amount;
        let newAccount = await demateAccountFound.save();
        return res.status(200).json({
            message: 'All done',
            data: newAccount
        })
    }
    res.status(400).status({
        message: 'Somthing went wrong'
    })

}
module.exports = { addMoneyController };