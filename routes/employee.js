let router = require('express').Router()

let uploads = require('../config/multer config')

let {getEmployeeSignupForm,employeeSignup} = require('../controllers/employee')

router.route('/signup').get(getEmployeeSignupForm).post(uploads.fields([
    {
        name:'resume',
        maxCount:1
    },
    {
        name:'doc',
        maxCount:1
    }
]),employeeSignup)
// router.post('/signup',uploads.fields([
//     {
//         name:'resume',
//         maxCount:1
//     },
//     {
//         name:'doc',
//         maxCount:1
//     }
// ]),employeeSignup)

module.exports=router