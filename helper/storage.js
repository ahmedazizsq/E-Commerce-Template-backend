const multer = require("multer");

module.exports = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"images")
    },
    filename:function(req,file,cb){
        cb(null,`${file.originalname}`)
    }
    
})