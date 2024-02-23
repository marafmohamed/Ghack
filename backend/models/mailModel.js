const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mailModel = new Schema({
    subject: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    departement: {
        type: String,
        required: true,
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