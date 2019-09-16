var express = require("express");
var app = express();


app.set("view engine", "ejs");

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