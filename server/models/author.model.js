// //// FIELDS /////////////////////////////////////////////
const mongoose = require("mongoose");
console.log("***************** 3-Models *******************");
// //// SCHEMA /////////////////////////////////////////////
const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [ 3, "Title must be at 3 characters long"]
    }
});

// //// MODEL ///////////////////////////////////////////////
const Author = mongoose.model('author',AuthorSchema);

// **** EXPORT **********************************************
module.exports = Author;
console.log("------------------- 3-Models -------------------");
