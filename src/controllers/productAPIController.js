const db = require("../database/models/index");


const productAPIController={

list: (req, res) => {
    db.BabySitter.findAll({
        include: ['babySitterAptitud']
    }
    )
        .then(sitters => {res.status(200).json({
            total: sitters.length,            
            data: sitters.map(sitter=>{return{
                id: sitter.id,
                nombre: sitter.nombre,
                descripcion: sitter.descripcion,
                aptitudes: sitter.babySitterAptitud,
                detail: '/api/product/detail/:id'    
                
                
        }})})})
    },

detail: (req,res)=>{
    const {id}=req.params;
    db.BabySitter.findByPk(id,{include:['babySitterAptitud']})
    .then(sitter=>res.status(200).json(
        {
            data: sitter
        }
    ))
}
}            
                 
            
    
        

module.exports=productAPIController;