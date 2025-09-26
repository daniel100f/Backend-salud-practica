const {Router}=require("express");
const {getAllActivities,postActivity}=require("./handlerCitas")


const citasRouter=Router();
citasRouter.get("/actividades",getAllActivities);
citasRouter.post("/postActivities",postActivity);


module.exports=citasRouter;