let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy
let Employee = require('../models/employee')
let Employer = require('../models/employer')
let bcrypt = require('bcrypt')

passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},async (email,password,done)=>{
    // console.log('here')
    try {

        let employee = await Employee.findOne({email:email})
        if(employee){
            bcrypt.compare(password,employee.password,(error,matched)=>{
                if(matched){
                   return done(null,employee)
                }
                else{
                    return done(null,false,{message:'password incorrect employee'})
                }
            })  
        }else{
            let employer = await Employer.findOne({email:email})
           
            if(employer){
                // console.log(employer)
                bcrypt.compare(password,employer.password,(error,mathced)=>{
                    if(mathced){
                     
                        return done(null,employer)
                    }else{
                        
                        return done(null,false,{message:'password incorret employer'})
                    }
                })
            }else{
                return done(null,false,{message:'email can not be found'})
            }
        }
    } catch (error) {
        return done(error)
    }
   

}
))

passport.serializeUser((user,done)=>{
    return done(null,user._id)
})
passport.deserializeUser(async (id,done)=>{

    try {

        let employee = await Employee.findById(id)
        let employer = await Employer.findById(id)
        if(employee){
            return done(null,employee)
        }
        if(employer){
            return done(null,employer)
        }
    } catch (error) {
        return done(error)
    }
   
})
module.exports={passport:passport}