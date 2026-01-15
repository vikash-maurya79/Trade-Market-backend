const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: 'Login required !'
            });
        }
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'strict'
        });
        return res.status(401).json({
            message: 'Invalid or expired token. Please login again.'
        });
    }
};

module.exports = authMiddleware;
