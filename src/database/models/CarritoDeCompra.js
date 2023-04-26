module.exports = (sequelize, dataTypes) => {
    let alias = 'CarritoDeCompra';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
           

        },

        cantidad: {
            type: dataTypes.TINYINT(10),           
                     
        },

        total: {
            type: dataTypes.INTEGER,           
                     
        }
    };
    let config = {
        timestamps: false,
    }
    const CarritoDeCompra = sequelize.define(alias, cols, config); 

    CarritoDeCompra.associate = function (models) {
        CarritoDeCompra.belongsTo(models.BabySitter, {
            as: "babySitterCompras",
            foreignKey: 'babysitters_id',
        }),

        CarritoDeCompra.belongsTo(models.User, {
            as: "CarritoDecompras",
            foreignKey: 'users_id',
        })
    }

    return CarritoDeCompra
};