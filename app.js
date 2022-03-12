let express = require('express')
require('dotenv').config()
let app = express()
let mongoose = require('mongoose')
let cors = require('cors')
let flash = require('express-flash')
let session = require('express-session')

let employee = require('./routes/employee')
let employer = require('./routes/employer')
let anyuser = require('./routes/auth')
let home = require('./routes/home')
let job = require('./routes/job')




mongoose.connect(process.env.MONGODB_URL,(error,success)=>{
    if(!error){
        app.listen(port,console.log(`server started and listening on port ${port}`))
    }else{
        console.log(`server can not be statrted: ${error}`)
    }
})
app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(anyuser.passport.initialize())
app.use(anyuser.passport.session())
app.use(express.static('./public'))
app.use(express.static('./uploads'))
app.use(cors({
origin:'*'
}))

// for(let i =0;i<20000;i++){
//     if((i%2)==0){
//     console.log(i)
//     }
// }

app.set('view engine','ejs')
app.set('views','./views')


app.use('/employee',employee)
app.use('/employer',employer)
app.use('/anyuser',anyuser.router)
app.use('/',home)
app.use('/job',job)

// console.log()

// console.log(typeof bldf != 'undefined')
// app.get('/',(req,res)=>{
//     res.status(200).render("index")
// })
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

