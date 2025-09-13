const {DataTypes }=require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define("Usuario",{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
         },
         primerNombre:{
            type:DataTypes.STRING,
            allowNull:false
         },
         segundoNombre:{
            type:DataTypes.STRING,
            allownNull:true
         },
         primerApellido:{
            type:DataTypes.STRING,
            allowNull:false
         },
         segundoApellido:{
            type:DataTypes.STRING,
            allowNull:true
         },
         fechaNacimiento:{
            type:DataTypes.DATE,
            allowNull:false
         },
         ciudad:{
            type:DataTypes.STRING
         },
        rol: {
        type: DataTypes.ENUM('administrador', 'paciente', 'profesional'), 
        allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        isActive:{
            type:DataTypes.BOOLEAN,
        defaultValue:true
        }
       

    },{timestamps:false});
};