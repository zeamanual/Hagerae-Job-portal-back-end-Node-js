

let getLoginForm = (req,res)=>{
    res.status(200).render('login')
}
let login = (req,res)=>{
    // console.log(req.body)
    // res.status(200).json({success:"login passed"})
}
let logout = (req,res)=>{
    req.logout()
    res.status(200).redirect('/')
}


module.exports= {login,getLoginForm,logout}