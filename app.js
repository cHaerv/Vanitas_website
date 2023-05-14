const { log } = require("console");
const express = require("express");
const app = express();
const https = require("https");
const path = require("path");
const ejs = require("ejs"); 

app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));




app.get("/", function(req, res) {
    res.render("home");
});


app.get("/shows", function (req, res) {
    res.render("shows");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("/videos", function(req, res) {
    res.render("videos");
});

app.get("/music", function (req, res) {
    res.render("music");
});

app.get("/biography", function (req, res) {
    res.render("biography");
});

app.get("/music", function (req, res) {
    res.render("music");
});

app.get("/epk", function (req, res) {
    res.render("epk");
});

app.listen("3000", function() {
    console.log("server is running on port 3000");
});