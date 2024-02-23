const path = require("path");
const Fileextention = (authoratedextentions) => {
  return (req, res, next) => {
    const files = req.files;
    let fileExtention = [];
    Object.keys(files).forEach(key=>{
        fileExtention.push(path.extname(files[key].name));
    })
    const allowed=fileExtention.every(ext=>authoratedextentions.includes(ext));
    if(!allowed){
        const message=`these are the only extentions allowed : ${authoratedextentions.toString()}`
        res.status(422).json({status:"error",message})
    }
    next()
  };
};
module.exports={
    Fileextention
}