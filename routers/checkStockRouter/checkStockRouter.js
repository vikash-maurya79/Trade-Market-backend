const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {holdingsController} = require('../../controllers/checkStockController/holdingsController');
const {watchlistController}=require('../../controllers/checkStockController/watchlistController');
const {positionsController}= require('../../controllers/checkStockController/positionsController');
router.get('/holdings/api', authMiddleware, holdingsController);
router.get('/watchlist/api', authMiddleware, watchlistController);
router.get('/positions/api', authMiddleware, positionsController);

module.exports = router;