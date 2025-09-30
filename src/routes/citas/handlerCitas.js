const {crearCita,allCitas} = require("./controllerCita");

const  getAllCitas= async(req,res)=>{

    try {
        const todasCitas = await allCitas();
        res.status(200).json(todasCitas);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const postCita= async(req,res)=>{
    const {fecha,procedimiento,estado,notas}=req.body;
    try {
        const citaNueva = await crearCita(fecha,procedimiento,estado,notas);
        res.status(200).json(citaNueva);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports={
    getAllCitas,
    postCita
    
}


