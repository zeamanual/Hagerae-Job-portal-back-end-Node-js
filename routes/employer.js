let router = require('express').Router()
let {getEmployerSignupForm,employerSignup} = require('../controllers/employer')

router.route('/signup').get(getEmployerSignupForm).post(employerSignup)