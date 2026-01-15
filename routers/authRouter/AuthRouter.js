const express = require('express');

const router = express.Router();
const {userLoginController} = require('../../controllers/authController/userLoginController');
const {userSignupController} = require('../../controllers/authController/userSignupController');

router.post('/loginuser/api', userLoginController); 
router.post('/signup/api', userSignupController);
module.exports = router;