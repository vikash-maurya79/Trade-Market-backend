const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../../models/UserModel");

const userSignupController = async (req, res) => {
    console.log("Route hitten");
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            message: 'Fill all required fields'
        })
    }
    let userFound = await User.findOne({ email });

    if (userFound) {
        return res.status(409).json({
            message: 'User already exists'
        })
    }
    let salt = await bcrypt.genSalt(10);
    let hashedPass = await bcrypt.hash(password, salt);
    let tempUser = new User({
        username: username,
        email: email,
        password: hashedPass,
    })
    let signedupUser = await tempUser.save();
    const token = jwt.sign({ id: signedupUser._id }, process.env.SECRET, {
        expiresIn: '2D'
    })
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000
    });
    res.status(200).json({
        message: 'User registered successfully'
    })
}
module.exports = { userSignupController };
