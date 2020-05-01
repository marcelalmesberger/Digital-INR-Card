//load required modules
const Chart = require("chart.js")

// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");

    // GENERATE LINE GRAPH FOR OVERVIEW PAGE

    // Graph data
    let graphData;

    // Select <canvas> element
    let ctx = document.getElementById("myChart");

    //create line graph
    let lineChart = new Chart(ctx, {
        type: "line",
        data: graphData


    });


    
});