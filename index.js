// load required modules
const express = require("express");
const bodyParser = require("body-parser");

// create express instance
const app = express();

// make puplic directory availabe
app.use(express.static(__dirname +"/public"));

// use modules
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES GET-REQUESTS*/

// landing page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/index.html");
});

// registration first step
app.get("/public/pages/registration1.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/registration1.html")
});

// registration second step
app.get("/public/pages/registration2.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/registration2.html")
});

// registration third step
app.get("/public/pages/registration3.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/registration3.html")
});

// overview page
app.get("/public/pages/overview.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/overview.html")
});

// my values page
app.get("/public/pages/myvalues.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/myvalues.html")
});

// import & export page
app.get("/public/pages/importexport.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/importexport.html")
});

// food page
app.get("/public/pages/food.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/food.html")
});

// interactions page
app.get("/public/pages/interactions.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/interactions.html")
});

// settings page
app.get("/public/pages/settings.html", (req, res) => {
    res.sendFile(__dirname + "/public/pages/settings.html")
});

// landing page after logout
app.get("/public/pages/index.html", (req, res) => {
    res.redirect("/");
});

/* POST-REQUESTS */

// landing page
app.post("/submit", (req, res) => {
    console.log("Email: " + req.body.loginmail);
    console.log("Passwort: " + req.body.loginpwd);
    res.redirect("/public/pages/overview.html");
});

// registration first step
app.post("/public/pages/registration1.html/submit", (req, res) => {
    console.log("Email: " + req.body.regemail);
    console.log("Passwort: " + req.body.regpwd);
    console.log("Bestätigung Passwort: " + req.body.checkpwd);
    res.redirect("/public/pages/registration2.html");
});

// registration second step
app.post("/public/pages/registration2.html/submit", (req, res) => {
    console.log("Nachname: " + req.body.surname);
    console.log("Vorname: " + req.body.prename);
    console.log("Geburtsdatum: " + req.body.birthdate);
    res.redirect("/public/pages/registration3.html");
});

app.post("/public/pages/registration3.html/submit", (req, res) => {
    console.log("Medikament: " + req.body.medication);
    console.log("INR-Zielwert " + req.body.targetvalue);
    console.log("INR-Zielbereich: von " + req.body.minrange + " bis " + req.body.maxrange);
    res.redirect("/public/pages/overview.html");
});

// Server listening on port 3000, http://localhost:3000/
app.listen(3000, () => {
    console.log("INR application is listening on port 3000");
});