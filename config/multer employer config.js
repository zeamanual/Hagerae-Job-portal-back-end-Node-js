let multer = require('multer')
let uuid = require('uuid')

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        return cb(null,'./uploads/employer')
    },
    filename:(req,file,cb)=>{

     
        return cb(null, `${uuid.v4()}--${file.originalname}`)
    }
})

let uploads = multer({
    storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype.startsWith('image')){
            cb(null,true)
        }else{
            cb(null,false)
        }
    }
})
module.exports=uploads