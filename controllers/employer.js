let bcrypt = require('bcrypt')
let Employer = require('../models/employer')
let Employee = require('../models/employee')



let getEmployerSignupForm=(req,res)=>{
    res.status(200).render('employeerRegister')
}

let employerSignup = async(req,res)=>{
    if(req.file?.fieldname){
        
        try {
            
            let {name,email,password,companyName,companyDescription,companyLocation} = req.body
            if(await Employer.find({email:email}) && await Employee.find({email:email})){
                return res.status(400).render('employeerRegister',{error:"Email Already Registered"})
            }
            let hashed = await bcrypt.hash(password,10)
            let logo = req.file
            let companyLogoPath=`${logo.destination.split('uploads').slice(-1)[0]}/${logo.filename}`
           let user = await Employer.create({
                name,
                email,
                password:hashed,
                companyLocation,
                companyName,
                companyDescription,
                companyLogoPath
            })
        
    res.send({status:'sucess'})
        } catch (error) {
            res.status(500).redirect('/employer/signup')
        }
      
    }
    else{
        res.status(400).render('employeerRegister',{error:'Only Images Are Allowed For Company Logo'})
    }
  
}

module.exports={getEmployerSignupForm,employerSignup}