// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");

    // GENERATE LINE GRAPH FOR OVERVIEW PAGE

    // Graph data
    let graphLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let graphData = [2.54, 2.63, 2.46, 2.56, 2.61];

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

    // CHANGE THE SHOWN FILE UPLOAD PATH ON THE IMPORT & EXPORT PAGE
    
    // Select file upload input field
    /*const fileInput = document.querySelector("#fileUpload input[type=file]")
    console.log(fileInput);

    // change file path name if file is uploaded
    fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
            const fileName = document.querySelector("#fileUpload .file-name");
            console.log(fileName);
            fileName.textContent = fileInput.files[0].name;
        }
    }*/
});