const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const router = express.Router();
const {viewStockController} = require('../../controllers/viewStockController/viewStockController');

router.post('/stock/:id/api', authMiddleware, viewStockController);
module.exports = router;