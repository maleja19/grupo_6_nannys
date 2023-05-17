const db = require("../database/models/index");
const { data } = require("./userController");
const path = require('path');

const usersAPIController = {
    list: (req, res) => {
        db.User.findAll({include:['ciudadDeResidencia']})
            .then(users => {res.status(200).json({
                total: users.length,
                data: users.map(user=>{return{
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email,
                    detail: '/api/users/detail/:id'
                    
                }
                })
                     
                }
                
                )
                })
            },
    
    detail: (req,res)=>{
        const {id}=req.params;
        db.User.findByPk(id)
        .then(user=>res.status(200).json(
            {
                id: user.id
                
            }
        ))
    },
           
    findId: (req,res) => {

        const {id}=req.params;
        db.User.findByPk(id)
            .then(user => {res.status(200).json(
                 {
                    url: user.img,
                                        
                })
            })

    }
}               
    
        
    





module.exports= usersAPIController;
