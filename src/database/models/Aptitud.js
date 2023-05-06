module.exports = (sequelize, dataTypes) => {
    let alias = 'Aptitud';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          
           

        },

        aptitudes: {
            type: dataTypes.STRING(45),           
                     
        }
    };
    let config = {
        timestamps: false,
        tableName: 'aptitudes'
    }
    const Aptitud = sequelize.define(alias, cols, config); 

    Aptitud.associate = function (models) {
        Aptitud.hasMany(models.BabySitter, {
            as: "babySitterAptitud",
            foreignKey: 'aptitudes_id',
            timestamps:false
        })
    }

    return Aptitud
};