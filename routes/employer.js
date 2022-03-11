let router = require('express').Router()
let {getEmployerSignupForm,employerSignup} = require('../controllers/employer')
let upload = require('../config/multer employer config')

router.route('/signup').get(getEmployerSignupForm).post(upload.single('companyLogo'),employerSignup)

module.exports=router