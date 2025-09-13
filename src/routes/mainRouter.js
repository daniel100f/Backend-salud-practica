const {Router} = require("express");
const usuariosRouter=require("./usuarios/usuariosRouter");
const citasRouter=require("./citas/activitiesRouter")

const mainRouter=Router();


mainRouter.use("/usuarios",usuariosRouter);
mainRouter.use("/citas",citasRouter)


module.exports= mainRouter;
   



