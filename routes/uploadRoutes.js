const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { fileExist } = require("../Middleware/fileExist");
const { Fileextention } = require("../Middleware/Fileextention");
const { FileSizeLimit } = require("../Middleware/FileSize");
const path=require("path")
router.use(express.urlencoded({ extended: true }));
router.use(fileUpload({ createParentPath: true }));
router
  .route("/")
  .post(
    fileExist,
    Fileextention([".png", ".pdf", ".jpg", ".jpeg"]),
    FileSizeLimit,
    (req, res) => {
      try {
        const files = req.files;
        Object.keys(files).forEach((key) => {
          const filepath = path.join(__dirname, "../uploads", files[key].name);
          files[key].mv(filepath, (err) => {
            if (err) {
              return res
                .status(400)
                .json({ status: "error", message: err.message });
            }
          });
        });
        return res.json({ status: "succes", message: Object.keys(files) });
      } catch (err) {
        res.json({ error: err.message });
      }
    }
  );

module.exports = router;