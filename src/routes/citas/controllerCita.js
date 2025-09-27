const {Cita} = require("../../db")



const allCitas = async()=>{
    return Cita.findAll();
}
const crearCita = async(fecha,horaInicio,procedimiento,estado,notas)=>{
    const citaNew = await Cita.create({fecha,horaInicio,procedimiento,estado,notas});
    return citaNew;
}; 





module.exports={
    crearCita,
    allCitas
};