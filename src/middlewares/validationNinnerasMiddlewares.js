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
    body('edad').notEmpty().withMessage('Tienes que escribir una edad'),
    body('nacionalidad').notEmpty().withMessage('Tienes que escribir una nacionalidad'),
    body('paisDeResidencia').notEmpty().withMessage('Tienes que escoger un pais'),
    body('ciudadDeResidencia').notEmpty().withMessage('Tienes que escoger una ciudad'),
    body('direccion').notEmpty().withMessage('Tienes que escribir un direccion'),
    body('celular').notEmpty().withMessage('Tienes que escribir un celular'),
    body('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('frase').notEmpty().withMessage('Tienes que escribir una frase'),
    body('precio').notEmpty().withMessage('Tienes que escribir un precio'),
    body('aptitudes_id').notEmpty().withMessage('Tienes que escoger 1 aptitud'),
]

module.exports=validations;