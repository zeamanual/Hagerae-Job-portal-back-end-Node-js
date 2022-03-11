let mongoose = require('mongoose')
let Schema = mongoose.Schema
let EmployerSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:false
        
    },
    password:{
        type:String,
        required:true,
        
    },
    companyLocation:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true,

    },
    companyDescription:{
        type:String,
        required:true,
       
    },
    companyLogoPath:{
        type:String,
        required:true,
      

    }
})

let EmployerModel = mongoose.model('Employer',EmployerSchema)

module.exports=EmployerModel