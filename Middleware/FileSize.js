//see if all the files are under the defined size
const MB=5;
const SIZE_LIMIT=MB*1024*1024;//5mb

const FileSizeLimit=(req,res,next)=>{
    const files=req.files
    let FilesOverTheLimit=[]
    Object.keys(files).forEach(key=>{
        if(files[key].size >SIZE_LIMIT){
            FilesOverTheLimit.push(files[key].name);
        }
    })
    if(FilesOverTheLimit.length>0){
        return res.status(400).json({status:"error",message:"files size over the limit"})
    }
    next();
}
module.exports={
    FileSizeLimit
}