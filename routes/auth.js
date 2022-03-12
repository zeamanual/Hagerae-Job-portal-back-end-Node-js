let router = require('express').Router()
let {passport}= require('../config/passport config')

let {getLoginForm,login,logout}= require('../controllers/auth')
router.route('/login').get(getLoginForm).post(passport.authenticate('local',{
    failureRedirect:'/anyuser/login',
    successRedirect:'/',
    failureFlash:true
    
}),login)

router.route('/logout').get(logout)

module.exports = {router,passport}