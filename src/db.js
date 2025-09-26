const {Sequelize} =require("sequelize");
require("dotenv").config()

const UsuariosFunction=require("./models/UsuariosModel");
const CitasFunction=require("./models/CitasModel");
const ProfesionalFunction=require("./models/Profesional.Model");
const PacienteFunction=require("./models/Paciente");
const citaFuncion=require("./models/Paciente");

const {DB_USER,DB_PASSWORD,DB_NAME,DB_PORT,DB_HOST }=process.env;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize=new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {logging:false}
);

//modelos a usar
UsuariosFunction(sequelize);
CitasFunction(sequelize);
ProfesionalFunction(sequelize);
PacienteFunction(sequelize)
citaFuncion(sequelize)
//modelos relacioness
const {Usuario,Profesional,Paciente}=sequelize.models;
//relacion uno a uno  
Usuario.hasOne(Profesional, { foreignKey: 'usuarioId' });
Profesional.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Usuario.hasOne(Paciente,{ foreignKey: 'usuarioId' });
Paciente.belongsTo(Usuario,{foreignKey:'usuarioId'});



/* Usuario.hasOne(Paciente, { foreignKey: 'usuarioId' });
Paciente.belongsTo(Usuario, { foreignKey: 'usuarioId' }); */


  
  




module.exports={
    ...sequelize.models,
    conn:sequelize


}