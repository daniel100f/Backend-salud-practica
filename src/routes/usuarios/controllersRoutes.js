const { where } = require("sequelize");
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const {Usuario,Profesional,Paciente}=require("../../db")

require("dotenv").config()

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

const checkEmailExists=async(email)=>{
    const userEmail=await Usuario.findOne({where:{email:email}})
    return userEmail;

}
const  registerUser= async (primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,ciudad,rol,email,isActive,contraseña)=>{
    const emailExiste = await checkEmailExists(email);
    
    if(!primerNombre || !primerApellido || !fechaNacimiento  || !email || !contraseña ){
        throw Error("faltan datos obligatorios");
    }
    if(emailExiste){
        throw Error(`usuario con el ${email} ya existe`)
    }
    //hashear la clave antes de guardarla
    /* -primero generamos los saltos
    -luego hasheamos la clave y le pasamos los saltos para que no se repitan */
        const salt = await bcrypt.genSalt(10);
        const contraseñaHasheada = await bcrypt.hash(contraseña,salt);

        const user= await Usuario.create({
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido,
            fechaNacimiento,
            ciudad,
            rol,
            email,
            isActive,
            contraseña:contraseñaHasheada
        });
        const token = jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"2h"});
        
        return token;
};
const getAcessLogueo = async(email,contraseña)=>{
    if(!email || !contraseña){
        throw Error("faltan datos de acceso");
    }
    const user= await Usuario.findOne({where:{email:email}});
    console.log(user)
    if(!user){
        throw Error(`no existe usuario con este correo ${user}`);
    }

    const isMatch = await bcrypt.compare(contraseña,user.contraseña);
    if(!isMatch){
        throw Error("no coinciden")
    }
    const token = jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"2h"});
    return token;


}
const getProfile=async(email)=>{
    const getPerfil = await Usuario.findOne({where:email});
    return getPerfil

}
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
        profesionalActualizado,
        getAcessLogueo,
        getProfile
        
        
    }
