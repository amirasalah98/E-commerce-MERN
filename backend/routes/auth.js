const express = require('express');
const router = express.Router();
const {signupAuth,loginAuth}= require('../controllers/auth')
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('../config');
// const User = require('../models/User');
router.post('/signup',signupAuth)
router.post('/login',loginAuth) 
module.exports = router;
