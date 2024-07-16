import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    redirectURL : {
        type : String,
        required : true
    },
    visits : [ {
        type : Date
    } ]
}, {timestamps : true})

const URL = mongoose.models.urls || mongoose.model('url', urlSchema)

export default URL;