// HTML string for further data handling

let htmlString = `<!--Start Data Entry-->
<div class="level box has-text-primary is-size-5">
    <div class="level-item">
        <div>
            <p class="has-text-centered has-text-weight-bold">
                Datum
            </p>
            <p class="entryDate">
                dd.mm.yyyy
            </p>
        </div>
    </div>
    <div class="level-item">
        <div>
            <p class="has-text-centered has-text-weight-bold">
                Uhrzeit
            </p>
            <p class="entryTime">
                hh:mm
            </p> 
        </div>
    </div>
    <div class="level-item">
        <div>
            <p class="has-text-centered has-text-weight-bold">
                INR
            </p>
            <p>
                <span class="icon has-text-danger">
                    <i class="fas fa-angle-double-down"></i>
                </span>
                <span class="entryINR">
                    0.00
                </span>
            </p> 
        </div>
    </div>
    <div class="level-item">
        <a href="" disabled class="button is-link is-outlined is-medium">
            <span class="icon">
                <i class="fas fa-edit"></i>
            </span>
            <span>
                Ändern
            </span>
        </a>
    </div>
    <div class="level-item">
        <a href="" disabled class="button is-link is-outlined is-medium">
            <span class="icon">
                <i class="fas fa-trash-alt"></i>
            </span>
            <span>
                Löschen
            </span>
        </a>
    </div>
</div>
<!--End Data Entry-->`;

// check if DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has been loaded and ready!");

    // fetch storage.json and change page content
    fetch("http://localhost:3000/data/storage.json")
    .then((res) => res.json())
    .then((storage) => {
        console.log(storage);

        // select the addAfterMe element
        let paragraph = document.getElementById("addAfterMe");
        console.log(paragraph);

        // append needed HTML elements after addAfterMe element based on fetched data
        for(let i = 0; i < storage.length; i++) {
            paragraph.insertAdjacentHTML("afterend", htmlString);
        }

        // select all elements with the class entryDate
        let dateEntries = document.getElementsByClassName("entryDate");
        console.log(dateEntries);

        // select all elements with the class entryTime
        let timeEntries = document.getElementsByClassName("entryTime");
        console.log(timeEntries);

        // select all elements with the class entryINR
        let inrEntries = document.getElementsByClassName("entryINR");
        console.log(inrEntries);

        // set IDs of the selected elements
        for(let i = 0; i < storage.length; i++) {
            dateEntries[i].id = "entryDate" + i;
            timeEntries[i].id = "entryTime" + i;
            inrEntries[i].id = "entryINR" + i;
        }

        // update content with the fetched data
        for (let i = 0; i < storage.length; i++) {
            let dateEntry = document.getElementById("entryDate" + i)
            let timeEntry = document.getElementById("entryTime" + i)
            let inrEntry = document.getElementById("entryINR" + i)
            dateEntry.innerHTML = storage[(storage.length - 1) - i].date;
            timeEntry.innerHTML = storage[(storage.length - 1) - i].time;
            inrEntry.innerHTML = storage[(storage.length - 1) - i].inr;
        }
    });
})