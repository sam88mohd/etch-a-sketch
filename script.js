const outerBox = document.querySelector(".root .game-container .outer-box");

// make 1 box in game-box
function makeBoxs(rows, cols) {
  // set new value for property in css object
  outerBox.style.setProperty("--grid-rows", rows);
  outerBox.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    outerBox.appendChild(cell).className = "inner-box";
  }
}

makeBoxs(16, 16);
