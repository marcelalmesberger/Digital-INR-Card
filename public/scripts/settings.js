// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");
    // fetch settings.json and change page content
    fetch("http://localhost:3000/data/settings.json")
    .then((res) => res.json())
    .then((settings) => {
        console.log(settings);
        // change the respective HTML elements with the fetched content
        document.getElementById("pSurname").innerHTML = settings.surname;
        document.getElementById("pPrename").innerHTML = settings.prename;
        document.getElementById("pBirthdate").innerHTML = settings.birthdate;
        document.getElementById("pMedication").innerHTML = settings.medication;
        document.getElementById("pTargetValue").innerHTML = settings.targetValue;
        document.getElementById("pMinRange").innerHTML = settings.minRange;
        document.getElementById("pMaxRange").innerHTML = settings.maxRange;
        document.getElementById("pEmail").innerHTML = settings.email;
        document.getElementById("pPassword").innerHTML = settings.password;
    })
    .catch((err) => {
        console.log(err);
    });
});