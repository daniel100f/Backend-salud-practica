

const  getAllActivities=(req,res)=>{

    res.status(200).send("traigo todas las actividades creadas");
}

const postActivity=(req,res)=>{
    const {name,email}=req.body;
    res.status(200).send(`usuario creado con exito ${name}`);
}
module.exports={
    getAllActivities,
    postActivity
}


