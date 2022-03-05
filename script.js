const outerBox = document.querySelector(".root .game-container .outer-box");
const clearButton = document.querySelector(".clear-btn");

// make 1 box in game-box
function makeBoxs(rows, cols) {
  // set new value for property in css object
  outerBox.style.setProperty("--grid-rows", rows);
  outerBox.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    outerBox.appendChild(cell).className = "inner-box";
  }
}

makeBoxs(16, 16);

// add event to box when hover will change color
const innerBox = Array.from(outerBox.children);
innerBox.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "gray";
  });
});

// add event to clear the box state
clearButton.addEventListener("click", function (e) {
  const innerBox =
    e.target.parentElement.parentElement.nextElementSibling.querySelectorAll(
      ".outer-box .inner-box"
    );
  innerBox.forEach((box) => {
    box.style.backgroundColor = "initial";
  });
});
