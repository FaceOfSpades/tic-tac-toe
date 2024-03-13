const Gameboard = (function () {
    const array = ["", "", "", "", "", "", "", "", ""]
    const topLeft = document.querySelector("#tl");
    topLeft.innerHTML = array[0];
    const topCenter = document.querySelector("#tc");
    topCenter.innerHTML = array[1];
    const topRight = document.querySelector("#tr");
    topRight.innerHTML = array[2];
    const middleLeft = document.querySelector("#ml");
    middleLeft.innerHTML = array[3];
    const middleCenter = document.querySelector("#mc");
    middleCenter.innerHTML = array[4];
    const middleRight = document.querySelector("#mr");
    middleRight.innerHTML = array[5];
    const bottomLeft = document.querySelector("#bl");
    bottomLeft.innerHTML = array[6];
    const bottomCenter = document.querySelector("#bc");
    bottomCenter.innerHTML = array[7];
    const bottomRight = document.querySelector("#br");
    bottomRight.innerHTML = array[8];

    const startBtn = document.querySelector("#startButton");
    const resetBtn = document.querySelector("#resetButton");
    const box = document.querySelectorAll(".box");
    startBtn.addEventListener("click", () => {
        box.forEach((e) => {
            e.addEventListener("click", () => {
                e.innerHTML = "X";
            });
        });
    });
    resetBtn.addEventListener("click", () => {
        box.forEach((e) => {
            e.innerHTML = "";
        });
    });
})();

function Player (name, piece) {
    const playerName = name;
    const playerPiece = piece;
    return {playerName, playerPiece};
};

function Game() {
    
};
