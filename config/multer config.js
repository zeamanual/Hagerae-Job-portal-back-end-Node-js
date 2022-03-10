let multer = require('multer')
let uuid = require("uuid")


let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        return cb(null,'./uploads/employee')
    },
    filename:(req,file,cb)=>{
        // console.log(req.uuid)
        return cb(null, `${uuid.v4()}--${file.originalname}`)
    }
})

let uploads = multer({storage,
fileFilter:(req,file,cb)=>{
    if(file.mimetype==='application/pdf'){
        return cb(null,true)
    }else{
        return cb(null,false)
    }
    console.log(file)
}
})
module.exports = {uploads}

