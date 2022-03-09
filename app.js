let express = require('express')
require('dotenv').config()
let app = express()
let cors = require('cors')

app.use(cors({
origin:'*'
}))
app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.status(200).render("index")
})
app.get('/employee',(req,res)=>{
    res.status(200).render("employeeRegister")
})
app.get('/login',(req,res)=>{
    res.status(200).render("login")
})
app.get('/detail',(req,res)=>{
    res.status(200).render("job_details")
})
app.get('/employeer',(req,res)=>{
    res.status(200).render("employeerRegister")
})
app.get('/job/all',(req,res)=>{
    res.status(200).render("job_listing")
})

let port = process.env.port
app.listen(port,console.log(`server started and listening on port ${port}`))
