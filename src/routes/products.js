const express = require('express');
const productsController = require('../controllers/productsController');
const path = require('path')
const multer=require('multer')

const{body} = require('express-validator');

const routerProducts = express.Router();

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
    body('edad').notEmpty().withMessage('Tienes que escribir una edad'),
    body('nacionalidad').notEmpty().withMessage('Tienes que escribir una nacionalidad'),
    body('pais_de_residencia').notEmpty().withMessage('Tienes que escribir un pais'),
    body('ciudad_de_residencia').notEmpty().withMessage('Tienes que escribir una ciudad'),
    body('direccion').notEmpty().withMessage('Tienes que escribir un direccion'),
    body('celular').notEmpty().withMessage('Tienes que escribir un celular'),
    body('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('frase').notEmpty().withMessage('Tienes que escribir una frase'),
    body('precio').notEmpty().withMessage('Tienes que escribir un precio'),
    body('aptitudes').notEmpty().withMessage('Tienes que escribir 3 aptitudes'),
]

routerProducts.get('/products/compras', productsController.allgetProducts);

routerProducts.get('/products/sign', productsController.create);

routerProducts.get('/products/:id/', productsController.detail);

routerProducts.post('/new-ninera',upload.single('img'), validations,productsController.store);


routerProducts.get('/products/:id/edit', productsController.edit);
routerProducts.put('/:id/edit', upload.single('img'),productsController.update);

routerProducts.delete('/:id/borrar', productsController.eliminar);

module.exports=routerProducts
