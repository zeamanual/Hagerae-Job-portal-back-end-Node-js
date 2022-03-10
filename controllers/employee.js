let Employee = require('../models/employee')
let bcrypt = require('bcrypt')

let getEmployeeSignupForm = (req,res)=>{
    res.status(200).render('employeeRegister')
}
let employeeSignup = async(req,res)=>{
    // console.log('hey',req.files?.doc)
    if(req.files?.resume && req.files?.doc){
        try {
           
            let resumeFile = req.files.resume[0]
            let resumePath = `${resumeFile.destination.split('uploads').slice(-1)[0]}/${resumeFile.filename}`
           
            let docFile = req.files.doc[0]
            let eduQuaDocPath=`${docFile.destination.split('uploads').slice(-1)[0]}/${docFile.filename}`
    
        
            let {name,email,password,gender,age,address,educationalLevel,fieldOfStudy,experienceLevel}=req.body
            let hashed = await bcrypt.hash(password,10)
            Employee.create({
                name,
                email,
                password:hashed,
                gender,
                address,
                age,
                educationalLevel,
                fieldOfStudy,
                experienceLevel,
                resumePath,
                eduQuaDocPath
            })
            res.json({status:'successful'})
        } catch (error) {
            
        }
       
    }else{
    res.status(400).render('employeeRegister', {error:'Non-PDF file uploadded. Try Again With A PDF file'})
}
}



module.exports={getEmployeeSignupForm,employeeSignup}