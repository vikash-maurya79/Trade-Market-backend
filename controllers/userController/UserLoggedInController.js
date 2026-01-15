const UserLoggedInController = async (req, res) => {
    if (req.user != null) {
        return res.status(200).json({
            message: 'User Logged In',
            isLoggedIn: true
        })
    }
}
module.exports = { UserLoggedInController };