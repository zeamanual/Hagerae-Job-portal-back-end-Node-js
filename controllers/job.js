let Job = require('../models/job')


let getCreateJobForm = (req,res)=>{
    res.status(200).render('post job')
}

let createJob = async (req,res)=>{
   

    try {

        let {title,vacanccy,location,requiredFieldOfStudy,requiredEducationalLevel,experienceLevel,type,description,salary} = req.body
        await Job.create({
            title,
            vacanccy,
            location,
            salary,
            requiredEducationalLevel,
            requiredFieldOfStudy,
            experienceLevel,
            description,
            type,
            publisher:req.user._id
        })

      
        return res.status(200).redirect('/')
    } catch (error) {
      return  res.status(500).redirect('/job/create')
    }

    // return res.status(200).send({msg:'job created'})

}
let getAll =async (req,res)=>{

    try {
        let jobs = await Job.find().populate('publisher')

        if(req.user){
            console.log('user is loged in')
            return res.status(200).render('job_listing',{logged:'',role:req.user.role,jobs})
         }
        res.status(200).render('job_listing',{jobs})
    } catch (error) {
        res.status(500).redirect('/')
    }
}
let search=async (req,res)=>{
    try {
        let jobs = await Job.find({title:{$regex : req.body.key}})
    } catch (error) {
        
    }
}

let getOne = async(req,res)=>{
    
    try {
        let job = await Job.findOne({_id:req.params.jobId}).populate('publisher')
        // console.log('found job',job)

       let postDate= String(job.createdAt).split(' ').slice(0,4).join(' ')

       if(req.user){
       return res.status(200).render('job_details',{logged:'',role:req.user.role,job,postDate})
    }
        res.status(200).render('job_details',{job,postDate})
    } catch (error) {
        
    }
}
let updateOne=(req,res)=>{

}

module.exports={getCreateJobForm,createJob,getAll,getOne,search,updateOne}