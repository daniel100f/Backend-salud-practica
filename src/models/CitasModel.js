const {DataTypes}=require("sequelize");
module.exports=(sequelize)=>{
    sequelize.define("Cita",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
   
    procedimiento:{
        type:DataTypes.STRING,
        allowNull:false

    },
    estado: {
        type:DataTypes.ENUM('agendada', 'confirmada', 'cancelada', 'completada'),
        defaultValue:"agendada"
    },
    notas:{
        type:DataTypes.TEXT,
        allowNull:false
    }

    
});
}