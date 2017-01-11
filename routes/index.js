const express = require('express')
let router = express.Router();
const controller = require('.././controllers')


router.get('/', controller.main.index)



module.exports = router;