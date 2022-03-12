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
            
            return res.status(200).render('job_listing',{logged:'',role:req.user.role,jobs})
         }
        res.status(200).render('job_listing',{jobs})
    } catch (error) {
        res.status(500).redirect('/')
    }
}
let search= async(req,res)=>{
    console.log(req.query)
 

    try {
        let {category,
            fullTime,
            partTime,
            remote,
            Freelance,
            location,
            experience12,
            experience23,
            experience34,
            experience44,
            anyTime,
            today,
            days2,
            days3,
            days5,
            days10,
            salaryFrom,
            salaryTo,
            searchKey
        }= req.query
        console.log('destructured...',category,
            fullTime,
            partTime,
            remote,
            Freelance,
            location,
            experience12,
            experience23,
            experience34,
            experience44,
            anyTime,
            today,
            days2,
            days3,
            days5,
            days10,
            salaryFrom,
            salaryTo
            )
        let query={}
        if(category){

       
            if(category=='All Category'){
                

            }else if(category=='Engineering'){
                query.requiredFieldOfStudy='Engineering'

            }
            else if(category=='Health'){
                query.requiredFieldOfStudy='Healthe and Related'

            }
            else if(category=='Technology'){
                query.requiredFieldOfStudy={$in:['Computer Science','Information Technology']}

            }
            else if(category=='Social Science'){
                query.requiredFieldOfStudy={$in:['Accounting','Management']}

            }
        }
        let jobType =[]
        if(fullTime || partTime || remote || Freelance){
            if(fullTime){
                jobType.push('Full Time')
            } 
            if(partTime){
                jobType.push('Part Time')
                
            }
            if(remote){
                jobType.push('Remote')
                
            }
            else if(Freelance){
                jobType.push('Freelance')
                
            }

            query.type={$in:jobType}
        }
       

        if(location){
            query.location={$regex:location,$options:'i'}
            }
        
        
        let jobExperience = []
        if(experience12 || experience23 || experience34 || experience44){
            if(experience12){
            jobExperience.push(1.5)
            } 
            if(experience23){
                jobExperience.push(2.5)
            }
            if(experience34){
                jobExperience.push(3.5)
            }
            if(experience44){
                jobExperience.push(4.5)
            }

            query.experienceLevel={$in:jobExperience}
        }
        //
        //
        // based on post date is not implemented yet
        //
        //
        //


        if(salaryFrom){
            query.salary={$gte: Number(salaryFrom)}
        }
        if(salaryTo){
            query.salary={$lte:Number(salaryTo)}
        }
        if(salaryFrom && salaryTo){
            query.salary = {$gte:Number(salaryFrom),$lte:Number(salaryTo)}
            
        }

        let jobs = await Job.find(query).populate('publisher')
        console.log(query)
        console.log('found jobs',jobs)

        // res.send('hey body search itme recieved')
        res.status(200).render('job_listing',{jobs})
        
       
    } catch (error) {
        console.log(error)
        res.send('error')
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