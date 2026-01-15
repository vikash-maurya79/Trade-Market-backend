const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const router = express.Router();
const { sellController } = require('../../controllers/buySellController/sellController');
const { buyController } = require('../../controllers/buySellController/buyController');

router.post('/sell/api', authMiddleware, sellController);

router.post('/buy/api', authMiddleware, buyController);

module.exports = router;