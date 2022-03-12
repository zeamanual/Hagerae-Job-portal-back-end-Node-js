let router = require('express').Router()
let {home} = require('../controllers/home')
router.route('/').get(home)

module.exports=router