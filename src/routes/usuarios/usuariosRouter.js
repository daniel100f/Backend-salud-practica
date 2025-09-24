const {Router}=require("express");
const {getDetailUser,getUsuarios,creatUsuarios,creatProfesional,getAllProfesionals,getDetailProfesional,deleteUser,getAllPaciente,createPaciente,geBytPaciente,updateUsuario,updatePaciente,updateProfesional,logueo,profile}=require("./handlersCountriesRoutes")
const {verifytoken,verifytokenAdmin,verifytokenProfesional,verifytokenPaciente}=require("../../middleware/jwtMiddleware")

const countrieRouter=Router();


// rutas de usaurios generales

countrieRouter.get("/",verifytoken,verifytokenAdmin,getUsuarios);
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
countrieRouter.get("/:id",verifytoken,verifytokenAdmin,getDetailUser);
countrieRouter.delete("/:id",verifytoken,verifytokenAdmin,deleteUser);
countrieRouter.put("/upDateUsuario/:id",verifytoken,verifytokenAdmin,updateUsuario);
// id Proesionales

countrieRouter.get("/profesionals/:id",verifytoken,verifytokenProfesional,getDetailProfesional);
countrieRouter.put("/profesionals/upDate/:id",verifytoken,verifytokenProfesional,updateProfesional);
// id pacientes
countrieRouter.get("/pacientes/:id",verifytokenPaciente,geBytPaciente);
countrieRouter.put("/pacientes/upDate/:id",verifytokenPaciente,updatePaciente);


module.exports=countrieRouter;
