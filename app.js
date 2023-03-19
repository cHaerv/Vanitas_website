const express = require("express");
const app = express();
const https = require("https");



app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/home.html");
});



app.listen("3000", function() {
    console.log("server is running on port 3000");
});