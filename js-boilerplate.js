let body = document.querySelector("body");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let themebtn = document.querySelector("#theme-btn");
let winnerBox = document.querySelector("#winner-box");
let gameContainer = document.querySelector(".game-container");

// console.log(resetbtn);

let turnX = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

resetbtn.addEventListener("click", () => {
  console.log("Game Reseted");

  turnX = true;
  winnerBox.classList.add("hide");
  winnerBox.innerHTML = "";
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnX) {
      box.innerHTML = "X";
      turnX = false;
    } else {
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const checkWin = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        let output = `Winner is Player ${pos1Val}`;
        winnerBox.classList.remove("hide");
        winnerBox.innerHTML = output;
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
};

themebtn.addEventListener("click", () => {
  currentTheme = "Dark";
  console.log("Theme Changed");
});
