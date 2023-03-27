const express = require('express');
const userController = require('../controllers/userController');
const path = require('path')
const multer=require('multer')


const{body} = require('express-validator');


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

const validations =[
    body('img').custom((value,{req})=>{
        let file = req.file;
        if(!file){
            throw new Error('Tienes que subir una imagen')
        }
    }),
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Ingresas un formato de email valido'),
    body('username').notEmpty().withMessage('Tienes que escribir un username'),
    body('password').notEmpty().withMessage('Tienes que escribir un password'),
    body('nacionalidad').notEmpty().withMessage('Tienes que escribir una nacionalidad'),
    body('pais_de_residencia').notEmpty().withMessage('Tienes que escribir un pais'),
    body('ciudad_de_residencia').notEmpty().withMessage('Tienes que escribir una ciudad'),
    body('direccion').notEmpty().withMessage('Tienes que escribir un direccion'),
    body('movil').notEmpty().withMessage('Tienes que escribir un celular'),
    
]

routerUsers.get('/users/signp', userController.create);

routerUsers.post('/new-user',upload.single('img'),validations,userController.data)

routerUsers.get('/users/login',userController.login);

/*routerUsers.get('/user/form-edit2', formEditParents);*/





module.exports = routerUsers;