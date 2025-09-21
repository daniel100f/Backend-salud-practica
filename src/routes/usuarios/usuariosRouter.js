const {Router}=require("express");
const {getDetailUser,getUsuarios,creatUsuarios,creatProfesional,getAllProfesionals,getDetailProfesional,deleteUser,getAllPaciente,createPaciente,geBytPaciente,updateUsuario,updatePaciente,updateProfesional,logueo,profile}=require("./handlersCountriesRoutes")
const verifytoken=require("../../middleware/jwtMiddleware")

const countrieRouter=Router();


// rutas de usaurios generales
countrieRouter.get("/",getUsuarios);
countrieRouter.post("/createdUser",creatUsuarios);
//rutas usuarios generales jwt
countrieRouter.get("/profile",verifytoken,profile)
countrieRouter.post("/logueo",logueo);
// rutas de profesionales
countrieRouter.get("/profesionals",getAllProfesionals)
countrieRouter.post("/createdProfesional",creatProfesional);
// rutas  pacientes
countrieRouter.get("/pacientes",getAllPaciente);
countrieRouter.post("/createPaciente",createPaciente);
// id Usuarios
countrieRouter.get("/:id",getDetailUser);
countrieRouter.delete("/:id",deleteUser);
countrieRouter.put("/upDateUsuario/:id",updateUsuario);
// id Proesionales

countrieRouter.get("/profesionals/:id",getDetailProfesional);
countrieRouter.put("/profesionals/upDate/:id",updateProfesional);
// id pacientes
countrieRouter.get("/pacientes/:id",geBytPaciente);
countrieRouter.put("/pacientes/upDate/:id",updatePaciente);


module.exports=countrieRouter;
