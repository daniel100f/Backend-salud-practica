const {DataTypes}=require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define("Paciente",{

        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        histrialMedico:{
            type:DataTypes.TEXT,
            allownNull:false
        },
        grupoSanguineo:{
            type:DataTypes.ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
            allownNull:false
        },
        peso:{
            type:DataTypes.FLOAT,
            allownNull:false
        },
        estatura:{
            type:DataTypes.FLOAT,
            allownNull:false
        }
        


    },{timestamps:false})
}