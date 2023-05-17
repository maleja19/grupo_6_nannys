module.exports = (sequelize, dataTypes) => {
    let alias = 'Ciudad';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         
           

        },

        ciudad: {
            type: dataTypes.STRING(45),           
                     
        }
    };
    let config = {
        timestamps: false,
        tableName: 'ciudad_de_residencias'
    }
    const Ciudad = sequelize.define(alias, cols, config); 

    Ciudad.associate = function (models) {
        Ciudad.hasMany(models.BabySitter, {
            as: "babySitterCiudad",
            foreignKey: 'ciudad_de_residencias_id',
        })

        Ciudad.hasMany(models.User, {
            as: "ciudadDeResidencia",
            foreignKey: 'ciudad_de_residencias_id',
        })
    }

    return Ciudad
};