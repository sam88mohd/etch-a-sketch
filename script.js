const outerBox = document.querySelector(".root .game-container .outer-box");
const buttonSection = document.querySelector(".button-container");

// make box in game-box
function makeBoxes(rows, cols = rows) {
  // set new value for property in css object
  outerBox.style.setProperty("--grid-rows", rows);
  outerBox.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.textContent = i;

    // add event to box when hover will change color
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "gray";
    });
    outerBox.appendChild(cell).className = "inner-box";
  }
}

// init the box
makeBoxes(16);

// add event to clear button section
buttonSection.addEventListener("click", function (e) {
  const innerBox = document.querySelectorAll(".inner-box");
  if (e.target.className === "clear-btn") {
    innerBox.forEach((box) => {
      box.style.backgroundColor = "initial";
    });
  }
  if (e.target.className === "number-btn") {
    let boxCount = prompt("Enter number of Box: ", 16);
    // remove existing box element
    let child = outerBox.firstElementChild;
    while (child) {
      outerBox.removeChild(child);
      child = outerBox.firstElementChild;
    }
    makeBoxes(boxCount);
  }
});
