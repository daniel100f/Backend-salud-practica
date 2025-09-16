const {Router}=require("express");
const {getDetailUser,getUsuarios,creatUsuarios,creatProfesional,getAllProfesionals,getDetailProfesional,deleteUser,getAllPaciente,createPaciente,geBytPaciente,updateUsuario}=require("./handlersCountriesRoutes")

const countrieRouter=Router();


// rutas de usaurios generales
countrieRouter.get("/",getUsuarios);
countrieRouter.post("/createdUser",creatUsuarios);
// rutas de profesionales
countrieRouter.get("/profesionals",getAllProfesionals)
countrieRouter.post("/createdProfesional",creatProfesional);
// rutas  pacientes
countrieRouter.get("/pacientes",getAllPaciente);
countrieRouter.post("/createPaciente",createPaciente);

countrieRouter.get("/:id",getDetailUser);
countrieRouter.delete("/:id",deleteUser);
countrieRouter.get("/profesionals/:id",getDetailProfesional);
countrieRouter.get("/pacientes/:id",geBytPaciente);
countrieRouter.put("/upDateUsuario/:id",updateUsuario)


module.exports=countrieRouter;
