const {Router}=require("express");
const {getAllActivities,postCita}=require("./handlerCitas")


const citasRouter=Router();
citasRouter.get("/",getAllActivities);
citasRouter.post("/crearCitas",postCita);


module.exports=citasRouter;