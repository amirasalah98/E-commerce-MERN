const express = require('express');
const router = express.Router();
const {signupAuth,loginAuth}= require('../controllers/auth')
const { body } = require('express-validator');


router.post('/signup',[
    body('email').isEmail().withMessage('Must be a valid email'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
   
],signupAuth)
router.post('/login',[
body('email').isEmail().withMessage('Must be a valid email'),
    body('password').notEmpty().withMessage('Password is required')
],loginAuth) 
module.exports = router;
