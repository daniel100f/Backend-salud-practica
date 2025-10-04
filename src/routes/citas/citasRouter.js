const {Router}=require("express");
const {getAllCitas,postCita,getCita,modificarCita}=require("./handlerCitas")


const citasRouter=Router();
citasRouter.get("/",getAllCitas);
citasRouter.post("/crearCitas",postCita);
citasRouter.put("/:id",modificarCita)
citasRouter.get("/:id",getCita);


module.exports=citasRouter;