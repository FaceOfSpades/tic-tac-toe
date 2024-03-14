function Player () {
    const playerName = document.querySelector("#player_name");
    const submitBtn = document.querySelector("#submit_button");
    const xmarker = document.querySelector("#xmarker");
    const omarker = document.querySelector("#omarker");
    const dialog = document.querySelector("dialog");
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();        
        dialog.close();
    });
    const GetPlayerMarker = () => {
        if (xmarker.checked) {
            return "X";
        } else if (omarker.checked) {
            return "O";
        };
    };
    const GetPlayerName = () => playerName.value;
    dialog.showModal();
    return {GetPlayerName, GetPlayerMarker};
};

const Gameboard = (function () {
    const array = ["", "", "", "", "", "", "", "", ""];
    const startBtn = document.querySelector("#startButton");
    let player1Name = "";    
    startBtn.addEventListener("click", () => {
        const player1 = Player();
        player1Name = player1.GetPlayerName();  
        const topLeft = document.querySelector("#tl");
        topLeft.addEventListener("click", () => {
            array[0] = player1.GetPlayerMarker();
            topLeft.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const topCenter = document.querySelector("#tc");
        topCenter.addEventListener("click", () => {
            array[1] = player1.GetPlayerMarker();
            topCenter.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const topRight = document.querySelector("#tr");
        topRight.addEventListener("click", () => {
            array[2] = player1.GetPlayerMarker();
            topRight.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const middleLeft = document.querySelector("#ml");
        middleLeft.addEventListener("click", () => {
            array[3] = player1.GetPlayerMarker();
            middleLeft.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const middleCenter = document.querySelector("#mc");
        middleCenter.addEventListener("click", () => {
            array[4] = player1.GetPlayerMarker();
            middleCenter.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const middleRight = document.querySelector("#mr");
        middleRight.addEventListener("click", () => {
            array[5] = player1.GetPlayerMarker();
            middleRight.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const bottomLeft = document.querySelector("#bl");
        bottomLeft.addEventListener("click", () => {
            array[6] = player1.GetPlayerMarker();
            bottomLeft.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const bottomCenter = document.querySelector("#bc");
        bottomCenter.addEventListener("click", () => {
            array[7] = player1.GetPlayerMarker();
            bottomCenter.innerHTML = player1.GetPlayerMarker();
            Game(array);
        });
        const bottomRight = document.querySelector("#br");
        bottomRight.addEventListener("click", () => {
            array[8] = player1.GetPlayerMarker();
            bottomRight.innerHTML = player1.GetPlayerMarker();
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

    const result = document.querySelector("#result");
    if (Game.xwinner == true) {
        result.textContent = "WINNER X: " + player1Name;
    } else if (Game.owinner == true) {
        result.textContent = "WINNER O: " + player1Name;
    } else if (Game.tie == true) {
        result.textContent = "WINNER: TIE";
    };
    return {Reset};
})();

function Game(array) {
    let xwinner = false;
    let owinner = false;
    let tie = false;
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
    return {xwinner, owinner, tie};
};
