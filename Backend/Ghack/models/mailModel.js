const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mailModel = new Schema({
    subject: {
        type: String,
    },
    content: {
        type: String,
    },
    sender: {
        type: String,
    },
    departement: {
        type: String,
    },
    priority: {
        type: String,
        default: "normal",
    },
    attachment: {
        type: String,
    },
    status:{
        type: Boolean,
        default:false
    }
}, { timestamps: true });    
module.exports = mongoose.model("Mail", mailModel);
