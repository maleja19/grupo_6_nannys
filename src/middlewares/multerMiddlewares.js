const multer=require('multer');
const path = require('path');

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../../public/images'))

    },
    filename:(req,file,cb)=>{
        //const newFile=`product-${Date.now()}_img${path.extname(file.originalname)}`

        const newFile= file.originalname;
        cb(null,newFile);

    }
});

const upload =multer({storage});

module.exports=upload;


