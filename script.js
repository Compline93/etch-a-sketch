// Handles button press to generate grid
const button = document.querySelector("#generate");

button.addEventListener("click", generateGrid);

// Generates squares to be colored in by fuction colorBox
const container = document.querySelector("#container");

function generateGrid() {
    for (let i = 0; i < 257; i++) {
        console.log("Grid is being generated!");
        const gridbox = document.createElement("div");
        gridbox.classList.add("gridbox");

        container.appendChild(gridbox);
    }

    // Listens for mouseover event to feed into colorBox
    const boxes = document.querySelectorAll(".gridbox");
    boxes.forEach((gridbox) => {
        gridbox.addEventListener("mouseover", colorBox);
    })
}

// Colors squares when moused over
function colorBox(e) {
    console.log("Moused over!");
    e.target.setAttribute("style", "background: black");
}


function testAlert(e) {
    console.log(e.target);
}