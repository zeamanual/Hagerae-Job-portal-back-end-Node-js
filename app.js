let express = require('express')
let app = express()
let cors = require('cors')

app.use(cors({
origin:'*'
}))

app.listen(7000,console.log('server started and listening on port 7000'))
