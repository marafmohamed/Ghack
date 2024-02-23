const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require("./routes/userRoutes");
const mailRoutes = require("./routes/mailRoutes");
const uploadRoute = require('./routes/uploadRoutes');
const fs=require("fs");
const path=require("path");
app.use("/user", userRoutes);
app.use("/mail", mailRoutes);
app.use("/department", require("./routes/departementRoutes"));
app.use('/upload',uploadRoute);
mongoose.connect(process.env.URI).then(() => {
 app.listen(process.env.PORT, () => {
    console.log(
      "connected to the db and listening at port : ",
      process.env.PORT
    );
  });
});
