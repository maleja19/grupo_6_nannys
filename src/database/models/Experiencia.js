module.exports = (sequelize, dataTypes) => {
    let alias = 'Experiencia';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         
           

        },

        esperiencias: {
            type: dataTypes.TEXT(500),           
                     
        }
    };
    let config = {
        timestamps: false,
    }
    const Experiencia = sequelize.define(alias, cols, config); 

    Experiencia.associate = function (models) {
        Experiencia.belongsTo(models.User, {
            as: "UserExperience",
            foreignKey: 'users_id',
        })

       
    }

    return Experiencia
};