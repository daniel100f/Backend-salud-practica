const {crearCita,allCitas,llamaCita,putCita} = require("./controllerCita");

const  getAllCitas= async(req,res)=>{

    try {
        const todasCitas = await allCitas();
        res.status(200).json(todasCitas);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const postCita= async(req,res)=>{
    const {procedimiento,estado,notas}=req.body;
    try {
        const citaNueva = await crearCita(procedimiento,estado,notas);
        res.status(200).json(citaNueva);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const getCita = async(req,res)=>{
    try {
        const {id}=req.params;
        const detailCita=await llamaCita(id);
        res.status(200).json(detailCita);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const modificarCita = async(req,res)=>{
    
    try {
        const {id}=req.params;
        const {procedimiento,estado,notas}=req.body;
        const cambio=await putCita(id,procedimiento,estado,notas);
        res.status(200).json(cambio);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports={
    getAllCitas,
    postCita,
    getCita,
    modificarCita
    
}


