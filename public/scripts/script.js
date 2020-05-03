// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");

    // GENERATE LINE GRAPH FOR OVERVIEW PAGE

    // Graph data
    let graphLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let graphData = [2.54, 2.63, 2.46, 2.56, 2.61];

    // Select <canvas> element
    let ctx = document.getElementById("myChart");

    //create line graph
    let lineChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: graphLabels,
            datasets: [{
                label: "INR",
                data: graphData
            }]
        },
        options: {

        }
    });


    
});