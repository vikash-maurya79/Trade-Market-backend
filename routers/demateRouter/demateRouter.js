const express = require('express');
const router = express.Router();
const { fetchAccountController } = require('../../controllers/fetchAccountController/fetchAccountController')
const { demateController } = require('../../controllers/demateController/demateController')
const { addMoneyController } = require('../../controllers/addMoneyController/addMoneyController')
const authMiddleware = require('../../middleware/authMiddleware');
router.post('/demateAccount/api', authMiddleware, demateController);
router.post('/addMoney/api', authMiddleware, addMoneyController);
router.get('/fetchAccount/:id/api', authMiddleware, fetchAccountController);
module.exports = router;