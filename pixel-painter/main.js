// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const docColor = document.querySelector("#current-color");
const colors = document.querySelectorAll(".color");


for (let color of colors){
  color.addEventListener("click", () => {
    docColor.style.background = color.style.background;
  });
}

const cells = document.querySelectorAll(".cell");


for ( let cell of cells){
  cell.addEventListener("click", () =>{
    cell.style.background = docColor.style.background
  });
}

const chaneAllCellsButton = document.createElement("button");
const pallet = document.querySelector("#palette")
pallet.append(chaneAllCellsButton);
chaneAllCellsButton.textContent = "colorAll"
chaneAllCellsButton.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.background = docColor.style.background
  })
})
// const cellsButton = document.createElement("button");
// const resetColor = document.querySelector(".color")
// pallet.append(cellsButton);
// cellsButton.textContent = "resetColor"
// cellsButton.addEventListener("click", () => {
//   cells.forEach((cell) => {
//     cell.style.background = docColor.style.background
//   })
// })