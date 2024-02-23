const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const departementModel = new Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
},{ timestamps: true});
module.exports = mongoose.model("Departement", departementModel);