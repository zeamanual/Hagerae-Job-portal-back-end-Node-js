
let home = (req,res)=>{
    // console.log(req.user)
    if(req.user){
        res.status(200).render('index',{logged:'',role:req.user.role})
    }
    else{
        res.status(200).render('index')
    }
}

module.exports={home}