const mongoose = require("mongoose");

// Define Schame wit timestamps and disable versionKey
const BookSchema = new mongoose.Schema({
    title : {type:String ,required:true},
    author : {type:String ,required:true},
    published_year : {type:Number ,required:true},
    genre : {type:String ,required:true},
    available : {type:Boolean ,required:true},
},{versionKey:false})
// Define Model

module.exports = mongoose.model('Books',BookSchema);

// Export Model
