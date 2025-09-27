const {Cita} = require("../../db")

const crearCita = async(fecha,horaInicio,procedimiento,estado,notas)=>{
    const citaNew = await Cita.create({fecha,horaInicio,procedimiento,estado,notas});
    return citaNew;
}; 





module.exports={
    crearCita
};