// Handles button press to generate grid
const button = document.querySelector("#generate");

button.addEventListener("click", initializeGrid);

// Generates squares to be colored in by fuction colorBox
const container = document.querySelector("#container");

function createBox(squareSize) {
    const gridbox = document.createElement("div");
    gridbox.classList.add("gridbox");
    gridbox.setAttribute("style", `height: ${800 / squareSize}px; width: ${800 / squareSize}px;`);

    container.appendChild(gridbox);
}

// Creates a new grid for boxes
function generateNewGrid(squareSize) {
    for (let i = 0; i < (squareSize ** 2); i++) {
        console.log("Grid is being generated!");
        createBox(squareSize);
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
    e.target.style.backgroundColor = "black";
}

// Clears grid for clean sketchpad
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Prompts user for size of sketchpad square
function getSquareSize() {
    let userInput = prompt("Enter size of square (max: 100).");
    return Number(userInput);
}

// Initializes sketchpad
function initializeGrid() {
    clearGrid();
    let squareSize = getSquareSize();
    generateNewGrid(squareSize);
    initMouseOver();
}


function testAlert(e) {
    console.log(e.target);
}