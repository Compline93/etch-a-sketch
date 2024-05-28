const container = document.querySelector("#container");

for (let i = 0; i < 257; i++) {
const gridbox = document.createElement("div");
gridbox.classList.add("gridbox");

container.appendChild(gridbox);
}