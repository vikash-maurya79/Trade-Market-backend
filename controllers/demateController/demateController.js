const DemateAccount = require('../../models/DemateAccountModel');
const User = require('../../models/UserModel');
const demateController = async (req, res) => {
    console.log('demate contr route hitten');
    let accountFound = await DemateAccount.findOne({
        accountNumber: req.body.accountNumber
    });
    if (accountFound != null) {
        return res.status(400).json({
            message: 'Account number already registered'
        })
    }

    let newAccount = new DemateAccount({
        accountNumber: req.body.accountNumber,
        ifscCode: req.body.ifscCode,
        amount: 0,
        accountOwner: req.user.id
    })
    let savedAccount = await newAccount.save();
    let userFound = await User.findById(req.user.id);
    userFound.demateAccountId.push(savedAccount._id);
    let saved = await userFound.save();
    console.log(req.body, req.user);
    return res.status(200).json({
        message: 'Account saved',
        user: saved
    })
}
module.exports = { demateController };