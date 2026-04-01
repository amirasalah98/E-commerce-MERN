const { postOrder } = require("../controllers/order");
const express =require('express')
const router= express.Router()
const { body } = require('express-validator');


router.post('/checkout',[
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Must be a valid email'),
    body('phone').isNumeric().withMessage('Must be a number'),
    body('city').notEmpty().withMessage('City is required'),
    body('address').notEmpty().withMessage('Address is required')

],postOrder)
module.exports = router;