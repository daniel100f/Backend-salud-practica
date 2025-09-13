const {Usuario,Profesional}=require("../../db")

//controllers Users general
const  getAllUsers=async()=>{
    return await Usuario.findAll({include:{
        model:Profesional,
        attributes:{
            exclude:["usuarioId"]
        }
    }});
}
const getByprimerNombre=async(name)=>{
    return await Usuario.findAll({where:{primerNombre:name}})
}

const getByDetail = async(id)=>{
    if(id===null)
        throw Error("usuario no existe")
    
    return await Usuario.findByPk(id,{include:{
        model:Profesional,
        attributes:{
            exclude:["usuariosId"]
        }
    }});
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
}

const registerProfesional=async(licenciaProfesional,especialidad,bibliografia,usuarioId)=>{

    if(!licenciaProfesional || ! especialidad || bibliografia )
        throw Error("falta datos obligatorios")
     const newProfesional = await Profesional.create({ licenciaProfesional, especialidad, bibliografia,usuarioId });
    
   
    
    ;
    
    return newProfesional;
}



    module.exports={
        registerUser,
        getAllUsers,
        getByDetail,
        getByprimerNombre,
        registerProfesional,
        allProfesionals,
        getProfesional,
        badUserDelete
        
        
    }
