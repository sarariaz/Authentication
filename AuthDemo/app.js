var express = require("express");
var app = express();
var mongoose = require("mongoose");
var User = require("./models/user");
var passport = require("passport");
var bodyParser = require("body-parser");
var localStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");


mongoose.connect("mongodb://localhost/auth_demo_app",{useNewUrlParser:true});
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", function(req,res){
    res.render("home");
});

app.get("/secret", function(req,res){
    res.render("secret");
})

// listen port
app.listen(3000, function(){
    console.log("Server Started!");
})