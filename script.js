const outerBox = document.querySelector(".root .game-container .outer-box");
const buttonSection = document.querySelector(".button-container");

// make box in game-box
function makeBoxes(rows, cols) {
  // set new value for property in css object
  outerBox.style.setProperty("--grid-rows", rows);
  outerBox.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");

    // add event to box when hover will change color
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "gray";
    });
    outerBox.appendChild(cell).className = "inner-box";
  }
}

// init the box
makeBoxes(16, 16);

// add event to clear button section
buttonSection.addEventListener("click", function (e) {
  const innerBox = document.querySelectorAll(".inner-box");
  if (e.target.className === "clear-btn") {
    innerBox.forEach((box) => {
      box.style.backgroundColor = "initial";
    });
  }
  if (e.target.className === "number-btn") {
    let colCount = parseInt(prompt("Enter columns length: ", 16));
    let rowCount = parseInt(prompt("Enter rows length: ", 16));
    if (colCount >= 100 || rowCount >= 100) {
      alert("exceed number range!");
    } else {
      // remove existing box element
      let child = outerBox.firstElementChild;
      while (child) {
        outerBox.removeChild(child);
        child = outerBox.firstElementChild;
      }
      makeBoxes(rowCount, colCount);
    }
  }
});
