const {Router}=require("express");
const {getAllActivities,postActivity}=require("./handlerActivity")


const activitiesRouter=Router();
activitiesRouter.get("/actividades",getAllActivities);
activitiesRouter.post("/postActivities",postActivity);


module.exports=activitiesRouter;