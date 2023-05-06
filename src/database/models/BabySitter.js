module.exports = (sequelize, dataTypes) => {
    let alias = 'BabySitter';
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
            type: dataTypes.STRING(50),
            
        },
        username: {
            type: dataTypes.STRING(45),
            
        },
        password: {
            type: dataTypes.STRING(60),
           
        },
        edad: {
            type: dataTypes.TINYINT(150),
            
        },
        paisDeResidencia: {
            type: dataTypes.STRING(45),
           
        },
       
        direccion: {
            type: dataTypes.STRING(45),            
        },

        celular: {
            type: dataTypes.INTEGER,            
        },

        descripcion: {
            type: dataTypes.TEXT(500),            
        },

        frase: {
            type: dataTypes.STRING(80),            
        },

        precio: {
            type: dataTypes.INTEGER,            
        }
        };
    let config = {
        timestamps: false,
    }
    const BabySitter = sequelize.define(alias, cols, config); 

    BabySitter.associate = function (models) {

        BabySitter.belongsTo(models.Aptitud, {
            as: "babySitterAptitud",
            foreignKey: 'aptitudes_id',
            timestamps:false
        })


        BabySitter.hasMany(models.CarritoDeCompra, {
            as: "babySitterCompras",
            foreignKey: 'users_id',
        })

        BabySitter.belongsTo(models.Ciudad, {
            as: "babySitterCiudad",
            foreignKey: 'ciudad_de_residencias_id',
        })
    }

    return BabySitter
};