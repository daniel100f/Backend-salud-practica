const {Cita} = require("../../db")



const allCitas = async()=>{
    return Cita.findAll();
}
const crearCita = async(fecha,procedimiento,estado,notas)=>{
    if(!fecha || !procedimiento || !estado || !notas){
        throw Error("faltan campos obligatorios");
    }
    const citaNew = await Cita.create({fecha,procedimiento,estado,notas});
    return citaNew;
}; 





module.exports={
    crearCita,
    allCitas
};