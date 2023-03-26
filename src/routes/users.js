const express = require('express');
const userController = require('../controllers/userController');
const path = require('path')
const multer=require('multer')


const routerUsers = express.Router();

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../../public/images'))

    },
    filename:(req,file,cb)=>{
        const newFile=`product-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,newFile);

    }
});

const upload =multer({storage});

routerUsers.get('/users/signp', userController.create);

routerUsers.post('/new-user',upload.single('img'),userController.data)

/*routerUsers.get('/login', login);

routerUsers.get('/form-edit2', formEditParents);*/





module.exports = routerUsers;