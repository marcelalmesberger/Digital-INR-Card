// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");

    // fetch storage.json and change page content
    fetch("http://localhost:3000/data/storage.json")
    .then((res) => res.json())
    .then((storage) => {
        console.log(storage);
    });
})