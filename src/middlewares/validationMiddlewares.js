const{body} = require('express-validator');
const path = require('path');
const db = require("../database/models/index");


const validations =[
    body('img').custom((value,{req})=>{
        let file = req.file;
        let acceptedExtensions =['.jpg','.png','.gif','.jpeg'];
        
        if(!file){
            throw new Error('Tienes que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(', ')} `)
    
            }   
            
        }
        
        return true;
    }),
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido').bail().isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Ingresas un formato de email valido'),
    body('username').notEmpty().withMessage('Tienes que escribir un username'),
    body('password').notEmpty().withMessage('Tienes que escribir un password').bail().isLength({min: 8}).withMessage('El password debe tener al menos 8 caracteres'),
    
    
    
]

module.exports=validations;