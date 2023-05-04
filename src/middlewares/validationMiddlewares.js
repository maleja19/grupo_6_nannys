const{body} = require('express-validator');
const path = require('path');
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

module.exports=validations;