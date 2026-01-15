const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {UserLoggedInController}=require('../../controllers/userController/UserLoggedInController');
const {getUserController}=require('../../controllers/userController/getUserController');


router.get('/login/api',authMiddleware,UserLoggedInController);
router.get('/user/api',authMiddleware,getUserController);

module.exports = router;