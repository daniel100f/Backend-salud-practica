const jwt = require("jsonwebtoken");
require("dotenv").config(); 

const verifytoken = (req, res, next) => {
    // 1. Obtener el encabezado de autorización
    const authHeader = req.headers.authorization;
  

    // 2. Validar  encabezado existe y tiene el formato correcto
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token no proporcionado o formato incorrecto." });
    }

    // 3. Extraer el token de la cadena "Bearer <token>"
    const token = authHeader.split(" ")[1];

    try {
        // 4. Verificar el token y decodificar el payload
        const {email,role} = jwt.verify(token, process.env.JWT_SECRET);
        console.log(email,role)
        // 5. Asignar la información del usuario al objeto de la solicitud (req)
        
        req.email =email;
        req.role=role
        
        next(); // Continuar con el siguiente middleware o la ruta
    } catch (error) {
        // Si la verificación falla, enviar un error 401
        return res.status(401).json({ error: "Token inválido o expirado." });
    }
};
const verifytokenAdmin=(req,res,next)=>{
    if(req.role==="administrador"){
        return next()
    }
    return res.status(401).json({ error: "Solo rol adminstrador permitido" });

}
const verifytokenProfesional=(req,res,next)=>{
    if(req.role==="profesional"){
        return next()
    }
    return res.status(401).json({ error: "Solo rol profesional permitido" });

}
const verifytokenPaciente=(req,res,next)=>{
    if(req.role==="paciente"){
        return next()
    }
    return res.status(401).json({ error: "Solo rol paciente permitido" });

}

module.exports = {verifytoken,verifytokenAdmin,verifytokenProfesional,verifytokenPaciente};