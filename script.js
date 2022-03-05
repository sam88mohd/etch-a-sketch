const outerBox = document.querySelector(".root .game-container .outer-box");
const buttonSection = document.querySelector(".button-container");

// color change function
function colorChange() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// make box in game-box
function makeBoxes(rows, cols) {
  // set new value for property in css object
  outerBox.style.setProperty("--grid-rows", rows);
  outerBox.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");

    // add event to box when hover will change color
    cell.addEventListener("mouseover", (e) => {
      e.target.style.setProperty("--color", `#${colorChange()}`);
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
      box.style.setProperty("--color", "white");
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
