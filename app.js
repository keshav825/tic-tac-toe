let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let newgame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turn0 = true;
const winpattern = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetgame = () => {
  turn0 = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    
    box.disabled = true;

    checkwinner();
  });
});
const disable = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  msg.innerText = `congratulations,the winner is ${winner}`;

  msgcontainer.classList.remove("hide");
  disable();
};

const checkwinner = () => {
  for (let pattern of winpattern) {
  
    // console.log(pattern[0],pattern[1],pattern[2]);
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showwinner(val1);
      }
      
    }
  }
};
reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);
