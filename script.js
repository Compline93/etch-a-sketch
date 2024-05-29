const container = document.querySelector("#container");

for (let i = 0; i < 257; i++) {
const gridbox = document.createElement("div");
gridbox.classList.add("gridbox");

container.appendChild(gridbox);
}

function colorBox(e) {
    console.log("Moused over!");
    e.target.setAttribute("style", "background: black");
}

const boxes = document.querySelectorAll(".gridbox");

boxes.forEach((gridbox) => {
    gridbox.addEventListener("mouseover", colorBox);
})

function testAlert(e) {
    console.log(e.target);
}