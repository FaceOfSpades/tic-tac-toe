const Player = (function() {
    const dialog = document.querySelector("dialog");
    const formPlayerName = document.querySelector("#player_name");
    const submitBtn = document.querySelector("#submit_button");
    const xmarker = document.querySelector("#xmarker");
    const omarker = document.querySelector("#omarker");
    let playerName = "";
    let playerMarker = "";
    const GetPlayerInfo = (function() {
        dialog.showModal();
        submitBtn.addEventListener("click", () => {
            playerName = formPlayerName.value;
            if (xmarker == true) {
                playerMarker = "X";
            } else if (omarker == true) {
                playerMarker = "O";
            };
        });
    });
    return {GetPlayerInfo, playerName, playerMarker};
})();

const Gameboard = (function () {
    const array = ["", "", "", "", "", "", "", "", ""];
    const startBtn = document.querySelector("#startButton");
    startBtn.addEventListener("click", () => {
        Player.GetPlayerInfo();
        const topLeft = document.querySelector("#tl");
        topLeft.addEventListener("click", () => {
            array[0] = "X";
            topLeft.innerHTML = "X";
            Game(array);
        });
        const topCenter = document.querySelector("#tc");
        topCenter.addEventListener("click", () => {
            array[1] = "X";
            topCenter.innerHTML = "X";
            Game(array);
        });
        const topRight = document.querySelector("#tr");
        topRight.addEventListener("click", () => {
            array[2] = "X";
            topRight.innerHTML = "X";
            Game(array);
        });
        const middleLeft = document.querySelector("#ml");
        middleLeft.addEventListener("click", () => {
            array[3] = "X";
            middleLeft.innerHTML = "X";
            Game(array);
        });
        const middleCenter = document.querySelector("#mc");
        middleCenter.addEventListener("click", () => {
            array[4] = "X";
            middleCenter.innerHTML = "X";
            Game(array);
        });
        const middleRight = document.querySelector("#mr");
        middleRight.addEventListener("click", () => {
            array[5] = "X";
            middleRight.innerHTML = "X";
            Game(array);
        });
        const bottomLeft = document.querySelector("#bl");
        bottomLeft.addEventListener("click", () => {
            array[6] = "X";
            bottomLeft.innerHTML = "X";
            Game(array);
        });
        const bottomCenter = document.querySelector("#bc");
        bottomCenter.addEventListener("click", () => {
            array[7] = "X";
            bottomCenter.innerHTML = "X";
            Game(array);
        });
        const bottomRight = document.querySelector("#br");
        bottomRight.addEventListener("click", () => {
            array[8] = "X";
            bottomRight.innerHTML = "X";
            Game(array);
        });
    });
    
    const resetBtn = document.querySelector("#resetButton");
    const box = document.querySelectorAll(".box");
    const Reset = (function () {
        box.forEach((e) => {
            e.innerHTML = "";
        });
        for (let i=0; i<9; i++) {
            array[i] = "";
        };
    });
    
    resetBtn.addEventListener("click", Reset);
    return {Reset};
})();

function Game(array) {
    let xwinner = false;
    let owinner = false;
    let tie = false;
    const result = document.querySelector("#result");
    if (array[0] == "X" && array[1] == "X" && array[2] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[0] == "X" && array[3] == "X" && array[6] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[6] == "X" && array[7] == "X" && array[8] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[2] == "X" && array[5] == "X" && array[8] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[0] == "X" && array[4] == "X" && array[8] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[2] == "X" && array[4] == "X" && array[6] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[1] == "X" && array[4] == "X" && array[7] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[3] == "X" && array[4] == "X" && array[5] == "X") {
        xwinner = true;
        Gameboard.Reset();
    } else if (array[0] == "O" && array[1] == "O" && array[2] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[0] == "O" && array[3] == "O" && array[6] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[6] == "O" && array[7] == "O" && array[8] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[2] == "O" && array[5] == "O" && array[8] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[0] == "O" && array[4] == "O" && array[8] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[2] == "O" && array[4] == "O" && array[6] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[1] == "O" && array[4] == "O" && array[7] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[3] == "O" && array[4] == "O" && array[5] == "O") {
        owinner = true;
        Gameboard.Reset();
    } else if (array[0] != "" && array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" && array[7] != "" && array[8] != "") {
        tie = true;
        Gameboard.Reset();
    };
    if (xwinner == true) {
        result.textContent = "WINNER: X";
    } else if (owinner == true) {
        result.textContent = "WINNER: O";
    } else if (tie == true) {
        result.textContent = "WINNER: TIE";
    };
};
