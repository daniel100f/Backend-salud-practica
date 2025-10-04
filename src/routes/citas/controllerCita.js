const {Cita} = require("../../db")



const allCitas = async()=>{
    return Cita.findAll();
}
/* const checkEstado=async(estado)=>{
    const cita = await Cita.findOne({where:{estado:estado}})
    return cita
}  */
const crearCita = async(procedimiento,estado,notas)=>{
 
    if(!procedimiento || !estado || !notas){
        throw Error("faltan campos obligatorios");
    }
  
    
    const citaNew = await Cita.create({procedimiento,estado,notas});
    return citaNew;
}; 
const llamaCita = async(id)=>{
    const citaindividual = await Cita.findByPk(id)
    return citaindividual
};
const putCita=async(id,procedimiento,estado,notas)=>{
    const cita = await Cita.findByPk(id)
    if(!cita){
        throw Error("cita no exite")
    }
    const updateCita = await cita.update({procedimiento,estado,notas});
    return updateCita

}





module.exports={
    crearCita,
    allCitas,
    llamaCita,
    putCita
};