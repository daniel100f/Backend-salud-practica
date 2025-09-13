const {DataTypes, Sequelize}=require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define("Profesional",{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        licenciaProfesional:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        especialidad:{
            type:DataTypes.STRING,
            allowNull:false
        },
        bibliografia:{
            type:DataTypes.TEXT,
            allowNull:false
        }
     },{timestamps:false})

}