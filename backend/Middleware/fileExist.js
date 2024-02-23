const fileExist=(req,res,next)=>{
    if(!req.files){
        return res.status(400).json({status:"error",message:"Files not found"});
    }
    next();
}

module.exports={fileExist}