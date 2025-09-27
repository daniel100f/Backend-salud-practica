const {Router}=require("express");
const {getAllCitas,postCita}=require("./handlerCitas")


const citasRouter=Router();
citasRouter.get("/",getAllCitas);
citasRouter.post("/crearCitas",postCita);


module.exports=citasRouter;