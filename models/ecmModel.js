const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const ecmSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        required: true
    },
    fileName:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    extension:{
        type: String,
        required: true
    },
    folder:{
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model("Ecm", ecmSchema);