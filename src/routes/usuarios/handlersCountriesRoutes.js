const {registerUser,getAllUsers,getByDetail,getByprimerNombre,registerProfesional,allProfesionals,getProfesional,badUserDelete,getAllPacientes,postPaciente,getOnePaciente,getUpdateUsuario,pacienteModificado,profesionalActualizado}=require("./controllersRoutes")

// handlers usuariso generales
const getUsuarios=async(req,res)=>{
    const {name}=req.query;
    console.log(req.query)

    try {
        if(name){
        const userByprimerNombre= await getByprimerNombre(name);
        res.status(200).json(userByprimerNombre);
    }else{
        const response= await getAllUsers();
        res.status(200).json(response);

    }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    
 
}
const getDetailUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const detailUser=await getByDetail(id);
    res.status(200).json(detailUser)
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }

    
};

const creatUsuarios=async(req,res)=>{

    try {
        const {primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad,rol,email,isActive,contraseña}=req.body;
        
    const newUser =await registerUser(primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad,rol,email,isActive,contraseña);
   
    res.status(200).json(newUser);
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }  
};
const updateUsuario = async(req,res)=>{
    const {id}=req.params;
    const {primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad,email,isActive}=req.body;
    try {
        const putUsuario= await getUpdateUsuario(id,primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad,email,isActive);
        res.status(200).json(putUsuario);
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}
const deleteUser=async(req,res)=>{
    try {
        const {id}=req.params;
        const badUser= await badUserDelete(id);
        res.status(200).send(badUser);
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}
// handlers profesionales

const getAllProfesionals=async(req,res)=>{

        try {
            const allDoctors= await allProfesionals();
            
            res.status(200).json(allDoctors);
            console.log(allDoctors)
        } catch (error) {
            res.status(400).send({error:error.message})
        }
    

};
const getDetailProfesional=async(req,res)=>{
    const {id}=req.params;
    try {
        const unProfesional=await getProfesional(id);
        res.status(200).json(unProfesional);

    } catch (error) {
        res.status(400).send({error:error.message})
    }
};
const updateProfesional=async(req,res)=>{
    const {id}=req.params;
    const {licenciaProfesional,especialidad,bibliografia}=req.body;
    try {
        const newProfesional=await profesionalActualizado(id,licenciaProfesional,especialidad,bibliografia);
        res.status(200).json(newProfesional)
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
}


const creatProfesional=async(req,res)=>{
    const {licenciaProfesional,especialidad,bibliografia,usuarioId}=req.body
    
    try {
        const profesionalDb= await registerProfesional(licenciaProfesional,especialidad,bibliografia,usuarioId);
        res.status(200).json(profesionalDb)
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}
// handlers paciente

const getAllPaciente=async (req,res)=>{
    try {
        const allPaciente= await getAllPacientes();
        res.status(200).json(allPaciente)
    } catch (error) {
        res.status(400).send({error:error.message})
    }

}
const geBytPaciente=async(req,res)=>{
    const {id}=req.params;
    try {
        const onePaciente=await getOnePaciente(id);
        res.status(200).json(onePaciente);
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
const createPaciente=async(req,res)=>{

    try {
        const {histrialMedico,grupoSanguineo,peso,estatura,usuarioId}=req.body;
        
        const  createPacientes= await postPaciente(histrialMedico,grupoSanguineo,peso,estatura,usuarioId);
        res.status(200).json(createPacientes);
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}
const updatePaciente= async (req,res)=>{
    const {id}=req.params;
    const  {histrialMedico,grupoSanguineo,peso,estatura}=req.body;
    try {
        const putPaciente= await pacienteModificado(id,histrialMedico,grupoSanguineo,peso,estatura);
        res.status(200).json(putPaciente);
    } catch (error) {
        res.status(400).send({error:error.message});
    }
}


module.exports={
    getUsuarios,
    getDetailUser,
    creatUsuarios,
    creatProfesional,
    getAllProfesionals,
    getDetailProfesional,
    deleteUser,
    getAllPaciente,
    createPaciente,
    geBytPaciente,
    updateUsuario,
    updatePaciente,
    updateProfesional
}