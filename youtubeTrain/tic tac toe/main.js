const area = document.getElementById("area");
let move = 0;
let result = "";
const contantWrapper = document.getElementById("content");
const madalResult = document.getElementById("modal-resolt-wraper");
const overlay = document.getElementById("overlay");
const btnClose = document.getElementById("btn-close");

area.addEventListener("click", (e) => {
  console.log(e.target);
  if ((e.target.className = "box")) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    move++;
    check();
  }
});

const check = () => {
  const boxes = document.getElementsByClassName("box");

  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == "X" &&
      boxes[arr[i][1]].innerHTML == "X" &&
      boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "крестики";
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML == "O" &&
      boxes[arr[i][1]].innerHTML == "O" &&
      boxes[arr[i][2]].innerHTML == "O"
    ) {
      result = "нолики";
      prepareResult(result);
    }
  }
};

const prepareResult = (winner) => {
  contantWrapper.innerHTML = `Winner ${winner} !`;
  madalResult.style.display = "block";
};

const closeModal = () => {
  madalResult.style.display = "none";
  location.reload();
};
overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
