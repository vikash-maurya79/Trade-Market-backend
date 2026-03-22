const DemateAccount = require('../../models/DemateAccountModel')
const fetchAccountController = async (req, res) => {
    const { id } = req.params;
    let accountFound = await DemateAccount.findById(id);
    if (accountFound) {
        return res.status(200).json({
            message: 'Account found',
            account: accountFound
        })
    }
}
module.exports = { fetchAccountController }