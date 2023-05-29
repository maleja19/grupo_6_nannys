const db = require("../database/models/index");
const { data } = require("./userController");
const path = require('path');

const usersAPIController = {
    list: (req, res) => {
        let localhost= 'http://localhost:3030'
        db.User.findAll({include:['ciudadDeResidencia']})
            .then(users => {res.status(200).json({
                total: users.length,
                data: users.map(user=>{return{
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email,
                    detail: (localhost+'/api/products/'+user.id)
                    
                }
                })
                     
                }
                
                )
                })
            },
    
    detail: (req,res)=>{
        const {id}=req.params;
        let ruta='http://localhost:3030'

        db.User.findOne({include:['ciudadDeResidencia'],where:{id:id}})
        .then(user=>res.status(200).json({
            id: user.id,
            img: ruta +''+user.img,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            username: user.username,               
            paisDeResidencia: user.paisDeResidencia,
            ciudad_de_residencias_id: user.ciudadDeResidencia.ciudad,
            direccion:user.direccion,
            movil:user.movil,
            pregunta:user.pregunta
        })

            
           
        )}
    
           
    
}               
    
        
    





module.exports= usersAPIController;
