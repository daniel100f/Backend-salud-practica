const {DataTypes}=require("sequelize");
module.exports=(sequelize)=>{
    sequelize.define("Cita",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    fecha:{
    type:DataTypes.DATEONLY,
    allowNull:false,
    },
    horaInicio:{
        type:DataTypes.TIME

    },
    procedimiento:{
        type:DataTypes.STRING,
        allowNull:false

    },
    estado: {
        type:DataTypes.ENUM('agendada', 'confirmada', 'cancelada', 'completada')
    },
    notas:{
        type:DataTypes.TEXT,
        allowNull:false
    }

    
},{timestamps:false});
}