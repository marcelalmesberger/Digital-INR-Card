// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");

    
    // fetch storage.json and change page content
    fetch("http://localhost:3000/data/storage.json")
    .then((res) => res.json())
    .then((storage) => {
        console.log(storage);
        // change the respective HTML elements with the fetched content of storage.json
        document.getElementById("latestINR").innerHTML = storage[storage.length - 1].inr;
        document.getElementById("latestDate").innerHTML = storage[storage.length - 1].date;
        document.getElementById("latestTime").innerHTML = storage[storage.length - 1].time;

        // fetch settings.json
        fetch("http://localhost:3000/data/settings.json")
        .then((res) => res.json())
        .then((settings) => {
            console.log(settings);
            // change the respective HTML elements with the fetched content of settings.json
            document.getElementById("pSurname").innerHTML = settings.surname;
            document.getElementById("pPrename").innerHTML = settings.prename;
            document.getElementById("pBirthdate").innerHTML = settings.birthdate;
            document.getElementById("pMedication").innerHTML = settings.medication;
            document.getElementById("pTargetValue").innerHTML = settings.targetValue;
            document.getElementById("pMinRange").innerHTML = settings.minRange;
            document.getElementById("pMaxRange").innerHTML = settings.maxRange;
            
            // change icon according to INR range
            
            // select the respective elements
            let iconContainer = document.getElementById("iconContainer");
            let iconContent = document.getElementById("iconContent");

            // save INR range in variables
            let minRange = settings.minRange;
            let maxRange = settings.maxRange;

            // save displayed INR value in variable
            let inrValue = storage[storage.length - 1].inr;

            // change icon
            if (inrValue < maxRange && inrValue > minRange) {
                iconContainer.className = "icon has-text-success";
                iconContent.className = "fas fa-check";
            }
            if (inrValue < minRange) {
                iconContainer.className = "icon has-text-danger";
                iconContent.className = "fas fa-angle-double-down";
            }
            if (inrValue > maxRange) {
                iconContainer.className = "icon has-text-danger";
                iconContent.className = "fas fa-angle-double-up";
            }
        })
        .catch((error) => {
            console.log(error);
        });

        // generate line graph based on fetched data
        
        // graph data with the 5 latest data entries
        let graphLabels = [storage[storage.length - 5].date, storage[storage.length - 4].date, storage[storage.length - 3].date, 
        storage[storage.length - 2].date, storage[storage.length - 1].date];
        let graphData = [storage[storage.length - 5].inr, storage[storage.length - 4].inr, storage[storage.length - 3].inr, 
        storage[storage.length - 2].inr, storage[storage.length - 1].inr];

        // Select <canvas> element
        let ctx = document.getElementById("myChart");

        // Update global variables of Chart.js
        Chart.defaults.global.defaultFontColor = "#03051C";
        Chart.defaults.global.defaultFontSize = 20;
        Chart.defaults.global.defaultFontFamily = "'Roboto', 'sans-serif'";

        //create line graph
        let lineChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: graphLabels,
                datasets: [{
                    label: "INR",
                    // line colours
                    backgroundColor: "#3460EF",
                    borderColor: "#3460EF",
                    // filling area under the line
                    fill: false,
                    // point colours
                    pointBackgroundColor: "#03051C",
                    pointBorderColor: "#03051C",
                    // point size
                    pointRadius: 4,
                    data: graphData
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 5,
                            min: 0,
                            steps: 0.5
                        }
                    }]
                }
            }
        });
    })
    .catch((error) => {
        console.log(error);
    });
});