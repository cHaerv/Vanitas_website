const { log } = require("console");
const express = require("express");
const app = express();
const https = require("https");
const path = require("path");
const ejs = require("ejs"); 
const { Server } = require("http");
const mailChimp = require("@mailchimp/mailchimp_marketing");
var bodyParser = require('body-parser');

app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mailChimp.setConfig({
    
});

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

app.get("/press", function (req, res) {
    res.render("press");
});

app.post("/contact", function (req, res) {

    const listId = "";

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);

    const subscribingUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    async function run() {
        const response = await mailChimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
        res.redirect("/")
        console.log(
            `Successfully added contact as an audience member. The contact's id is ${response.id
            }.`
        );
    };
    run().catch(e => res.render("failure"));

});

app.listen("3000", function() {
    console.log("server is running on port 3000");
});