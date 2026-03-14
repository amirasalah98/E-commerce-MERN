const { getArt } = require("../controllers/artController");
const express =require('express')
const router= express.Router()

router.get('/',getArt)
module.exports = router;
