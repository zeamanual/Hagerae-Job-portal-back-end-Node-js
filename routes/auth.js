let router = require('express').Router()
let {getLoginForm,login}= require('../controllers/auth')
router.route('/login').get()


module.exports = router