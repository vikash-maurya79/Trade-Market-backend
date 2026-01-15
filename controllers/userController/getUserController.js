const User = require("../../models/UserModel.js");

const getUserController = async (req, res) => {
    const user = req.user.id;
    const userFound = await User.find({ _id: user });
    return res.status(200).json({
        message: 'working well',
        user: userFound
    });
}
module.exports = { getUserController };