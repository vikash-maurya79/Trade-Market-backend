const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../../models/UserModel");


const userLoginController = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Fill all required fields'
        });
    }
    let userFound = await User.findOne({ email });
    if (userFound != null) {
        let compareSuccess = await bcrypt.compare(password, userFound.password);
        if (compareSuccess) {
            const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
                expiresIn: '2D'
            })
            res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 30 * 24 * 60 * 60 * 1000
            })
            return res.status(200).json({
                message: 'Login successfull'
            })
        }
        else {
            return res.status(409).json({
                message: 'Wrong password'
            })
        }
    }
    else {
        return res.status(409).json({
            message: 'No account registered with this email'
        })
    }
}
module.exports = { userLoginController };