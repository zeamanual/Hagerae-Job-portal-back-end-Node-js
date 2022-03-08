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

app.get('/home',(req,res)=>{
    res.status(200).render("index")
})
app.get('/job/all',(req,res)=>{
    res.status(200).render("job_listing")
})

let port = process.env.port
app.listen(port,console.log(`server started and listening on port ${port}`))
