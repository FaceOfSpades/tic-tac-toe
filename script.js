function Player () {
    const playerName = document.querySelector("#player_name");
    const player2Name = document.querySelector("#player2_name")
    const xmarker = document.querySelector("#xmarker");
    const omarker = document.querySelector("#omarker");
    const xmarker2 = document.querySelector("#xmarker2");
    const omarker2 = document.querySelector("#omarker2");
    let player1Score = 0;
    let player2Score = 0;
    const Player1Wins = () => player1Score++;
    const GetPlayer1Score = () => player1Score;
    const Player2Wins = () => player2Score++;
    const GetPlayer2Score = () => player2Score;
    const GetPlayerMarker = () => {
        if (xmarker.checked) {
            return "X";
        } else if (omarker.checked) {
            return "O";
        };
    };
    const GetPlayerName = () => playerName.value;
    const GetPlayer2Marker = () => {
        if (xmarker2.checked) {
            return "X";
        } else if (omarker2.checked) {
            return "O";
        };
    };
    const GetPlayer2Name = () => player2Name.value;
    const ResetPlayer1Score = () => player1Score = 0;
    const ResetPlayer2Score = () => player2Score = 0;
    return {ResetPlayer1Score, ResetPlayer2Score, Player1Wins, GetPlayer1Score, Player2Wins, GetPlayer2Score, GetPlayerName, GetPlayerMarker, GetPlayer2Name, GetPlayer2Marker};
};

const Gameboard = (function () {
    const array = ["", "", "", "", "", "", "", "", ""];
    const startBtn = document.querySelector("#startButton");
    const dialog = document.querySelector("dialog");
    const submitBtn = document.querySelector("#submit_button");
    const result = document.querySelector("#result");
    const player1 = document.createElement("div");
    const player2 = document.createElement("dvi");
    player1.classList.add("player1");
    player2.classList.add("player2");
    const player1Score = document.createElement("div");
    const player2Score = document.createElement("div");
    let player1Name = "";
    let player2Name = "";
    let player1Marker = "";
    let player2Marker = "";
    let marker = "";
    let turn = true;
    startBtn.addEventListener("click", () => {
        const players = Player();
        dialog.showModal();
        submitBtn.addEventListener("click", (event) => {
            startBtn.textContent = "NEW GAME";
            event.preventDefault();
            winners.ResetPlayer1Score();
            winners.ResetPlayer2Score();
            player1Name = players.GetPlayerName().toUpperCase();
            player2Name = players.GetPlayer2Name().toUpperCase();
            if (player1Name == "") {
                player1Name = "PLAYER 1";
            };
            if (player2Name == "") {
                player2Name = "PLAYER 2";
            };
            player1Marker = players.GetPlayerMarker();
            player2Marker = players.GetPlayer2Marker();
            player1.textContent = player1Name;
            player2.textContent = player2Name;
            player1Score.textContent = players.GetPlayer1Score();
            player2Score.textContent = players.GetPlayer2Score();
            result.appendChild(player1);
            result.appendChild(player2);
            player1.appendChild(player1Score);
            player2.appendChild(player2Score);
            dialog.close();
        });
        const topLeft = document.querySelector("#tl");
        topLeft.addEventListener("click", () => {
            if (array[0] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[0] = marker;
                topLeft.innerHTML = marker;
                PlayGame(array);
            };
        });
        const topCenter = document.querySelector("#tc");
        topCenter.addEventListener("click", () => {
            if (array[1] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[1] = marker;
                topCenter.innerHTML = marker;
                PlayGame(array);
            };
        });
        const topRight = document.querySelector("#tr");
        topRight.addEventListener("click", () => {
            if (array[2] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[2] = marker;
                topRight.innerHTML = marker;
                PlayGame(array);
            };
        });
        const middleLeft = document.querySelector("#ml");
        middleLeft.addEventListener("click", () => {
            if (array[3] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[3] = marker;
                middleLeft.innerHTML = marker;
                PlayGame(array);
            };
        });
        const middleCenter = document.querySelector("#mc");
        middleCenter.addEventListener("click", () => {
            if (array[4] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[4] = marker;
                middleCenter.innerHTML = marker;
                PlayGame(array);
            };
        });
        const middleRight = document.querySelector("#mr");
        middleRight.addEventListener("click", () => {
            if (array[5] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[5] = marker;
                middleRight.innerHTML = marker;
                PlayGame(array);
            };
        });
        const bottomLeft = document.querySelector("#bl");
        bottomLeft.addEventListener("click", () => {
            if (array[6] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[6] = marker;
                bottomLeft.innerHTML = marker;
                PlayGame(array);
            };
        });
        const bottomCenter = document.querySelector("#bc");
        bottomCenter.addEventListener("click", () => {
            if (array[7] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[7] = marker;
                bottomCenter.innerHTML = marker;
                PlayGame(array);
            };
        });
        const bottomRight = document.querySelector("#br");
        bottomRight.addEventListener("click", () => {
            if (array[8] == "") {
                if (turn == true) {
                    marker = player1Marker;
                    turn = false;
                } else {
                    marker = player2Marker;
                    turn = true;
                };
                array[8] = marker;
                bottomRight.innerHTML = marker;
                PlayGame(array);
            };
        });
    });
    const resetBtn = document.querySelector("#resetButton");
    const box = document.querySelectorAll(".box");
    const player1ScoreUpdate = document.createElement("div");
    const player2ScoreUpdate = document.createElement("div");
    resetBtn.addEventListener("click", () => {
        box.forEach((e) => {
            e.innerHTML = "";
        });
        for (let i=0; i<9; i++) {
            array[i] = "";
        };
        winner.remove();
        player1Score.remove();
        player2Score.remove();
        player1ScoreUpdate.textContent = winners.GetPlayer1Score();
        player2ScoreUpdate.textContent = winners.GetPlayer2Score();
        player1.appendChild(player1ScoreUpdate);
        player2.appendChild(player2ScoreUpdate);
    });
    const winner = document.createElement("span");
    winner.classList.add("winner");
    const winners = Player();
    const DisplayWinner = (function(xwinner, owinner, tie) {
        if (xwinner == true && player1Marker == "X") {
            winner.textContent =  player1Name + " WINS!";
            winners.Player1Wins();
        } else if (xwinner == true && player2Marker == "X") {
            winner.textContent = player2Name + " WINS!";
            winners.Player2Wins();
        } else if (owinner == true && player1Marker == "O") {
            winner.textContent = player1Name + " WINS!";
            winners.Player1Wins();
        } else if (owinner == true && player2Marker == "O") {
            winner.textContent = player2Name + " WINS!";
            winners.Player2Wins();
        } else if (tie == true) {
            winner.textContent = "TIE";
        };
        result.appendChild(winner);
    }); 
    return {DisplayWinner};
})();

function PlayGame (array) {
    let xwinner = false;
    let owinner = false;
    let tie = false;
    if (array[0] == "X" && array[1] == "X" && array[2] == "X") {
        xwinner = true;
    } else if (array[0] == "X" && array[3] == "X" && array[6] == "X") {
        xwinner = true;
    } else if (array[6] == "X" && array[7] == "X" && array[8] == "X") {
        xwinner = true;
    } else if (array[2] == "X" && array[5] == "X" && array[8] == "X") {
        xwinner = true;
    } else if (array[0] == "X" && array[4] == "X" && array[8] == "X") {
        xwinner = true;
    } else if (array[2] == "X" && array[4] == "X" && array[6] == "X") {
        xwinner = true;
    } else if (array[1] == "X" && array[4] == "X" && array[7] == "X") {
        xwinner = true;
    } else if (array[3] == "X" && array[4] == "X" && array[5] == "X") {
        xwinner = true;
    } else if (array[0] == "O" && array[1] == "O" && array[2] == "O") {
        owinner = true;
    } else if (array[0] == "O" && array[3] == "O" && array[6] == "O") {
        owinner = true;
    } else if (array[6] == "O" && array[7] == "O" && array[8] == "O") {
        owinner = true;
    } else if (array[2] == "O" && array[5] == "O" && array[8] == "O") {
        owinner = true;
    } else if (array[0] == "O" && array[4] == "O" && array[8] == "O") {
        owinner = true;
    } else if (array[2] == "O" && array[4] == "O" && array[6] == "O") {
        owinner = true;
    } else if (array[1] == "O" && array[4] == "O" && array[7] == "O") {
        owinner = true;
    } else if (array[3] == "O" && array[4] == "O" && array[5] == "O") {
        owinner = true;
    } else if (array[0] != "" && array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" && array[7] != "" && array[8] != "") {
        tie = true;
    };
    if (xwinner == true || owinner == true || tie == true){
        Gameboard.DisplayWinner(xwinner, owinner, tie);
    };
};
