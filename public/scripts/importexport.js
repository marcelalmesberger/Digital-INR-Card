// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");
    
    // display file name when select file
    let fileInputs = document.querySelectorAll(".file.has-name");
    for (let fileInput of fileInputs) {
        let input = fileInput.querySelector(".file-input");
        let name = fileInput.querySelector(".file-name");
        input.addEventListener("change", () => {
            let files = input.files;
            if (files.length === 0) {
                name.innerText = "Keine Datei ausgewählt";
            } else {
                name.innerText = files[0].name;
            }
        });
    }
});
