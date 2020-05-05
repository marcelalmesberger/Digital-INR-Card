// load required modules
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const csv = require("fast-csv");

// create express instance
const app = express();

// make puplic directory availabe
app.use(express.static(__dirname +"/public"));

// use modules
app.use(bodyParser.urlencoded({ extended: true }));

// define temporary directory for file uploads
const upload = multer({ dest: "public/data/" });

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

// landing page (at the moment no login checks are executed!)
app.post("/submit", (req, res) => {
    console.log("Email: " + req.body.loginmail);
    console.log("Passwort: " + req.body.loginpwd);
    res.redirect("/public/pages/overview.html");
});

// registration first step
app.post("/public/pages/registration1.html/submit", (req, res) => {
    // load settings.json
    let rawSettings = fs.readFileSync("public/data/settings.json");
    // parse settings.json
    let settings = JSON.parse(rawSettings);
    console.log(settings);
    // save Email in variable and update settings.json
    console.log("Email: " + req.body.regemail);
    let email = req.body.regemail;
    settings.email = email;
    // save Password in variable and update settings.json
    console.log("Passwort: " + req.body.regpwd);
    let pwd = req.body.regpwd;
    settings.password = pwd;
    // save Check-Password in variable (not used yet in this prototype!)
    console.log("Bestätigung Passwort: " + req.body.checkpwd);
    let checkpwd = req.body.checkpwd;
    // save updated settings object in JSON
    console.log(settings);
    fs.writeFileSync("public/data/settings.json", JSON.stringify(settings));
    // redirect to the next site
    res.redirect("/public/pages/registration2.html");
});

// registration second step
app.post("/public/pages/registration2.html/submit", (req, res) => {
    // load settings.json
    let rawSettings = fs.readFileSync("public/data/settings.json");
    // parse settings.json
    let settings = JSON.parse(rawSettings);
    console.log(settings);
    // save Surname in varibale and update settings.json
    console.log("Nachname: " + req.body.surname);
    let surname = req.body.surname;
    settings.surname = surname;
    // save Prename in variable and update settings.json
    console.log("Vorname: " + req.body.prename);
    let prename = req.body.prename;
    settings.prename = prename;
    // save Birthdate in variable and update settings.json
    console.log("Geburtsdatum: " + req.body.birthdate);
    let birthdate = req.body.birthdate;
    settings.birthdate = birthdate
    // save updated settings object in JSON
    console.log(settings);
    fs.writeFileSync("public/data/settings.json", JSON.stringify(settings));
    // redirect to the next site
    res.redirect("/public/pages/registration3.html");
});

// registration third step
app.post("/public/pages/registration3.html/submit", (req, res) => {
    // load settings.json
    let rawSettings = fs.readFileSync("public/data/settings.json");
    // parse settings.json
    let settings = JSON.parse(rawSettings);
    console.log(settings);
    // save Medication in variable an update settings.json
    console.log("Medikament: " + req.body.medication);
    let medication = req.body.medication;
    settings.medication = medication;
    // save INR Target Value in variable and update settings.json
    console.log("INR-Zielwert " + req.body.targetvalue);
    let targetValue = req.body.targetvalue;
    settings.targetValue = targetValue;
    // save INR Target Range in variables and update settings.json
    console.log("INR-Zielbereich: von " + req.body.minrange + " bis " + req.body.maxrange);
    let minRange = req.body.minrange;
    let maxRange = req.body.maxrange;
    settings.minRange = minRange;
    settings.maxRange = maxRange;
    // save updated settings object in JSON
    console.log(settings);
    fs.writeFileSync("public/data/settings.json", JSON.stringify(settings));
    // redirect to the next site
    res.redirect("/public/pages/overview.html");
});

// CSV-file upload
app.post("/public/pages/importexport.html/submit", upload.single("fileupload"), (req, res) => {
    console.log("POST-Request für Dateiupload");
    const fileRows = [];

    // open uploaded file
    csv.parseFile(req.file.path)
        .on("data", (data) => {
            fileRows.push(data);
        })
        .on("end", () => {
            console.log(fileRows);
            // save data stream in variable
            let stream = fs.readFileSync(req.file.path);
            // write stream in storage.csv
            fs.writeFileSync("public/data/storage.csv", stream);
            // delete stream file
            fs.unlinkSync(req.file.path);
        })
    res.redirect("/public/pages/importexport.html");
});

// Server listening on port 3000, http://localhost:3000/
app.listen(3000, () => {
    console.log("INR application is listening on port 3000");
});