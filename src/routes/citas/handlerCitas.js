const {crearCita} = require("./controllerCita");

const  getAllActivities=(req,res)=>{

    res.status(200).send("traigo todas las actividades creadas");
}

const postCita= async(req,res)=>{
    const {fecha,horaInicio,procedimiento,estado,notas}=req.body;
    try {
        const citaNueva = await crearCita(fecha,horaInicio,procedimiento,estado,notas);
        res.status(200).json(citaNueva);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports={
    getAllActivities,
    postCita
    
}


