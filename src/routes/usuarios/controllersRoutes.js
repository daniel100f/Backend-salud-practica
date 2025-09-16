const {Usuario,Profesional,Paciente}=require("../../db")

//controllers Users general
const  getAllUsers=async()=>{
    return await Usuario.findAll({include:[
            {
                model: Profesional,
                attributes: {
                    
                    exclude: ["usuarioId"] 
                }
            },
            {
                model: Paciente,
                attributes: {
                    
                    exclude: ["usuarioId"] 
                }
            }
        ]});
}
const getByprimerNombre=async(name)=>{
    return await Usuario.findAll({where:{primerNombre:name}})
}

const getByDetail = async(id)=>{
    if(id===null)
        throw Error("usuario no existe")
    
    return await Usuario.findByPk(id,{include:[
            {
                model: Profesional,
                attributes: {
                    
                    exclude: ["usuarioId"] 
                }
            },
            {
                model: Paciente,
                attributes: {
                    
                    exclude: ["usuarioId"] 
                }
            }
        ]});
}


const  registerUser= async (primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad,rol,email,isActive)=>{
    if(!primerNombre || !primerApellido || !fechaNacimiento || !rol ||!email){
        throw  Error("faltan datos obligatorios")
    }
        return await Usuario.create({primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad,rol,email,isActive});
};
const badUserDelete=async(id)=>{
        

       const usuario= await Usuario.findByPk(id);
       const aux={...usuario};
        await usuario.destroy();
        return aux
}
const getUpdateUsuario=async(id,primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad, email,isActive)=>{
    const  usuario = await Usuario.findByPk(id);
    if(!usuario){
        throw Error("Usuario no existe");
    }
    const usuarioActualizado = await usuario.update({
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        fechaNacimiento,
        ciudad,
        email,
        isActive
    });
    return usuarioActualizado;

}
// controllers Profesional

const allProfesionals=async()=>{
        return await Profesional.findAll()
};
const getProfesional=async(id)=>{
    return await Profesional.findByPk(id,{
        include:{
            model:Usuario

        }
    });
};
const profesionalActualizado = async(id,licenciaProfesional,especialidad,bibliografia)=>{
    const profesional= await Profesional.findByPk(id);
    if(!profesional){
        throw Error("profesional no existe");
    }
    const profesionalModificado = await profesional.update({
        licenciaProfesional,
        especialidad,
        bibliografia

    });
    return profesionalModificado;
}

const registerProfesional=async(licenciaProfesional,especialidad,bibliografia,usuarioId)=>{

    if(!licenciaProfesional || ! especialidad || !bibliografia )
        throw Error("falta datos obligatorios")
     const newProfesional = await Profesional.create({ licenciaProfesional, especialidad, bibliografia,usuarioId });
    
   
    
    
    
    return newProfesional;
}
// controllers paciente
const getAllPacientes=async()=>{
    return await Paciente.findAll({include:{
        model:Usuario,
        attributes:{
            exclude:["usuarioId"]
        }
    }});
     
}

const getOnePaciente= async(id)=>{
    return await Paciente.findByPk(id,{include:{
        model:Usuario,
        attributes:{
            exclude:["usuarioId"]
        }
    }})
}
const postPaciente=async(histrialMedico,grupoSanguineo,peso,estatura,usuarioId)=>{
    if(!histrialMedico || !grupoSanguineo || !peso || !estatura){
        throw Error("faltan datos obligatorios");
    }

    const newPaciente=  await Paciente.create({histrialMedico,grupoSanguineo,peso,estatura,usuarioId});
    
    return newPaciente
    
}

const pacienteModificado=async(id,histrialMedico,grupoSanguineo,peso,estatura)=>{
    const paciente = await Paciente.findByPk(id);
    if(!paciente){
        throw Error("no  existe paciente");
    }
    const newPaciente = await paciente.update({
        histrialMedico,
        grupoSanguineo,
        peso,
        estatura
    });
    return newPaciente;

}



    module.exports={
        registerUser,
        getAllUsers,
        getByDetail,
        getByprimerNombre,
        registerProfesional,
        allProfesionals,
        getProfesional,
        badUserDelete,
        getAllPacientes,
        postPaciente,
        getOnePaciente,
        getUpdateUsuario,
        pacienteModificado,
        profesionalActualizado
        
        
    }
