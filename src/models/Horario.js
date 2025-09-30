const {DataTypes, UUID, UUIDV4}=require("sequelize");

module.exports = (sequelize)=>{
    sequelize.define("Horario",{
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey:true,
        },
        dias:{
            type:DataTypes.ENUM("Lunes","Martes","Miercoles","Jueves","Viernes"),
            allownNull:false
        },
        horarioInicio:{
            type:DataTypes.TIME,
            allownNull:false
        },
        horarioFin:{
            type:DataTypes.TIME,
            allownNull:false
        }
    })

}