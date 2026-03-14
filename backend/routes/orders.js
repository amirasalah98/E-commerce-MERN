const { postOrder } = require("../controllers/order");
const express =require('express')
const router= express.Router()

router.post('/orders',postOrder)
module.exports = router;