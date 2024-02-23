const express = require("express");
const router = express.Router();
const Ecm = require("../models/ecmModel");
const fileUpload = require("express-fileupload");
const { fileExist } = require("../Middleware/fileExist");
const { Fileextention } = require("../Middleware/Fileextention");
const { FileSizeLimit } = require("../Middleware/FileSize");
const path = require("path");
const { requireAuth } = require("../requireAuth/requireAuth");
router.use(express.urlencoded({ extended: true }));
router.use(fileUpload({ createParentPath: true }));
router
  .route("/")
  .post(
    requireAuth,
    fileExist,
    Fileextention([".png", ".pdf", ".jpg", ".jpeg"]),
    FileSizeLimit,
    (req, res) => {
      const { department } = req.body;
      try {
        const files = req.files;
        Object.keys(files).forEach((key) => {
          const filepath = path.join(
            __dirname,
            `../${department}`,
            files[key].name
          );
          files[key].mv(filepath, (err) => {
            if (err) {
              return res
                .status(400)
                .json({ status: "error", message: err.message });
            }
          });
          const fileStats = fs.statSync(filepath);
          const fileDetails = {
            fileName: path.basename(files[key].name),
            creator: req.user._id,
            extension: path.extname(files[key].name),
            size: fileStats.size,
            path: filepath,
            folder: department,
          };
          Ecm.create(fileDetails);
        });
        return res.json({ status: "succes", message: Object.keys(files) });
      } catch (err) {
        res.json({ error: err.message });
      }
    }
  );
router.get("/", requireAuth, async (req, res) => {
  const department = req.user.department;
  try {
    const fileDetails = await Ecm.find({ folder: department });
    res.json({ files: fileDetails });
  } catch (err) {
    res.json({ error: err.message });
  }
});
module.exports = router;
