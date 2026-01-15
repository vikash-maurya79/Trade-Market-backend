const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const router = express.Router();
const { logoutController } = require('../../controllers/logoutController/logoutController');

router.post('/logout/api', authMiddleware, logoutController);
module.exports = router;