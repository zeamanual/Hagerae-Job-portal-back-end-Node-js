let mongoose = require("mongoose")
let Schema = mongoose.Schema

let EmployeeSchema = new Schema({
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
    gender:{
        type :String,
        required:true,
        enum:['MALE','FEMALE']
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    educationalLevel:{
        type:String,
        required:true,
        default:'Other'

    },
    fieldOfStudy:{
        type:String,
        required:true,
        default:null

    },
    experienceLevel:{
        type:String,
        required:true,
        default:'0 years'
    },
    resumePath:{
        type:String,
        required:true,
        default:null

    },
    eduQuaDocPath:{
        type:String,
        required:true,
        default:null
    }

})

let EmployeeModel = mongoose.model("Employee",EmployeeSchema)

module.exports=EmployeeModel