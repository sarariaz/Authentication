var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose); // it will allow certain functions for auth to our schema
module.exports = mongoose.model("User", userSchema);