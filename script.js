// Handles button press to generate grid
const button = document.querySelector("#generate");

button.addEventListener("click", initializeGrid);

// Generates squares to be colored in by fuction colorBox
const container = document.querySelector("#container");

function createBox() {
    const gridbox = document.createElement("div");
    gridbox.classList.add("gridbox");

    container.appendChild(gridbox);
}

// Creates a new grid for boxes
function generateNewGrid() {
    for (let i = 0; i < 256; i++) {
        console.log("Grid is being generated!");
        createBox();
    }
}

// Listens for mouseover event to feed into colorBox
function initMouseOver() {
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

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Initializes sketchpad
function initializeGrid() {
    clearGrid();
    generateNewGrid();
    initMouseOver();
}


function testAlert(e) {
    console.log(e.target);
}