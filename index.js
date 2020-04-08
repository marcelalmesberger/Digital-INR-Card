// load required modules
const express = require("express");

// create express instance
const app = express();

// make puplic directory availabe
app.use(express.static("public"));

/* ROUTES */

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
    res.sendFile(__dirname + "/public/pages/index.html")
});

// Server listening on port 3000, http://localhost:3000/
app.listen(3000, () => {
    console.log("INR application is listening on port 3000");
});