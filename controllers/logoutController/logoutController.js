const logoutController = (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: '0'
    })
    res.status(200).json({
        message: 'Logout successfully'
    })
}
module.exports = { logoutController };