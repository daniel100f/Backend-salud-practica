const jwt = require("jsonwebtoken");
require("dotenv").config(); // Asegúrate de cargar tus variables de entorno

const verifytoken = (req, res, next) => {
    // 1. Obtener el encabezado de autorización
    const authHeader = req.headers.authorization;

    // 2. Validar si el encabezado existe y tiene el formato correcto
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token no proporcionado o formato incorrecto." });
    }

    // 3. Extraer el token de la cadena "Bearer <token>"
    const token = authHeader.split(" ")[1];

    try {
        // 4. Verificar el token y decodificar el payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // 5. Asignar la información del usuario al objeto de la solicitud (req)
        // Puedes acceder al ID, email o cualquier dato que hayas incluido en el token
        req.email = decoded.email;
        
        next(); // Continuar con el siguiente middleware o la ruta
    } catch (error) {
        // Si la verificación falla, enviar un error 401
        return res.status(401).json({ error: "Token inválido o expirado." });
    }
};

module.exports = verifytoken;