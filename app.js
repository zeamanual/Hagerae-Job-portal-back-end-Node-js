let express = require('express')
require('dotenv').config()
let app = express()
let mongoose = require('mongoose')
let cors = require('cors')
let employee = require('./routes/employee')



app.use(cors({
origin:'*'
}))
mongoose.connect(process.env.MONGODB_URL,(error,success)=>{
    if(!error){
        app.listen(port,console.log(`server started and listening on port ${port}`))
    }else{
        console.log(`server can not be statrted: ${error}`)
    }
})
app.use(express.static('./public'))
app.use(express.static('./uploads'))
app.set('view engine','ejs')
app.set('views','./views')
app.use('/employee',employee)

// console.log(typeof bldf != 'undefined')
app.get('/',(req,res)=>{
    res.status(200).render("index")
})
// app.get('/employee',(req,res)=>{
//     res.status(200).render("employeeRegister")
// })
// app.get('/login',(req,res)=>{
//     res.status(200).render("login")
// })
// app.get('/post',(req,res)=>{
//     res.status(200).render("post job")
// })
// app.get('/detail',(req,res)=>{
//     res.status(200).render("job_details")
// })
// app.get('/employeer',(req,res)=>{
//     res.status(200).render("employeerRegister")
// })
// app.get('/job/all',(req,res)=>{
//     res.status(200).render("job_listing")
// })

let port = process.env.port

