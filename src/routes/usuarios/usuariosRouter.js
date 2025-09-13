const {Router}=require("express");
const {getDetailUser,getUsuarios,creatUsuarios,creatProfesional,getAllProfesionals,getDetailProfesional,deleteUser}=require("./handlersCountriesRoutes")

const countrieRouter=Router();


// rutas de usaurios generales
countrieRouter.get("/",getUsuarios);
countrieRouter.post("/createdUser",creatUsuarios);
// rutas de profesionales
countrieRouter.get("/profesionals",getAllProfesionals)
countrieRouter.post("/createdProfesional",creatProfesional);

countrieRouter.get("/:id",getDetailUser);
countrieRouter.delete("/:id",deleteUser);
countrieRouter.get("/profesionals/:id",getDetailProfesional);


module.exports=countrieRouter;
