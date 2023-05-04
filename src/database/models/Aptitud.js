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
    }
    const Aptitud = sequelize.define(alias, cols, config); 

    Aptitud.associate = function (models) {
        Aptitud.belongsToMany(models.BabySitter, {
            as: "babySitterAptitud",
            through: 'babysitters_has_aptitudes',
            foreignKey: 'aptitudes_id',
            otherKey: 'babysitters_id',
            timestamps:false
        })
    }

    return Aptitud
};