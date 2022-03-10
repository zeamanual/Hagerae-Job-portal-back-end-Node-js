let bcrypt = require('bcrypt')
const res = require('express/lib/response')


let getEmployerSignupForm=()=>{
    res.status(200).render('employeerRegister')
}

let employerSignup