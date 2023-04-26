module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            

        },

        img: {
            type: dataTypes.STRING(100),           
                     
        },

        nombre: {
            type: dataTypes.STRING(45),
            
        },
        apellido: {
            type: dataTypes.STRING(45),
            
        },
        email: {
            type: dataTypes.STRING(45),
            unique: true
        },
        username: {
            type: dataTypes.STRING(45),
            
        },
        password: {
            type: dataTypes.STRING(60),
           
        },
        
        paisDeResidencia: {
            type: dataTypes.STRING(45),
           
        },
       
        direccion: {
            type: dataTypes.STRING(45),            
        },

        movil: {
            type: dataTypes.INTEGER,            
        },

        pregunta: {
            type: dataTypes.BOOLEAN,            
        },

        dudas: {
            type: dataTypes.STRING(45),            
        },

        admin: {
            type: dataTypes.TINYINT(4),            
        } 
    };
    let config = {
        timestamps: false,
       
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.hasMany(models.CarritoDeCompra, {
            as: "CarritoDecompras",
            foreignKey: 'users_id',
        })

        User.belongsTo(models.Ciudad, {
            as: "ciudadDeResidencia",
            foreignKey: 'ciudad_de_residencias_id',
        })
    }

    return User
};