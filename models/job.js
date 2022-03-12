let mongoose = require('mongoose')
let Schema = mongoose.Schema

let JobSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    vacanccy:{
        type:Number,
        required:true,
        min:[1,'vacanccy must be at least one']
    },
    location:{
        type:String,
        required:true
    },
    requiredEducationalLevel:{
        type:String,
        required:true,
    },
    requiredFieldOfStudy:{
        type:String,
        required:true
    },
    experienceLevel:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    totalApplies:{
        type:Number,
        default:0
    },
    salary:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:['Full Time','Part Time','Remote','Freelance']
    },
    publisher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employer'
    }

},{
    timestamps:true
})

let JobModel = mongoose.model('Job',JobSchema)

module.exports=JobModel