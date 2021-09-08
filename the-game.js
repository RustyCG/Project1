
var player1Box = document.querySelector('.player1Box');
var player2Box = document.querySelector('.player2Box');
var letsPlayBtn = document.querySelector("#lets-play-btn")
var gameCell = document.querySelectorAll('.cell');
var board = document.querySelector('.board')
var resetBtn = document.querySelector('.reset-btn');

var player1Score = [];
var player2Score = [];
var clickCount = 0;
var player1 = "X";
var player2 = "O";
var currentPlayer = "X";
var clickedCells = []
var winCount = []


var winCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9]
]

letsPlayBtn.addEventListener('click', gamePlay)

function activePlayer() {
    if (clickCount % 2 === 0) {
        return player1
    } else {
        return player2
    }
}

resetBtn.addEventListener('click', resetBtnClick)

function resetBtnClick() {
    player1Score = [];
    player2Score = [];
    clickedCells = []
    clickCount = 0
    gameCell.forEach(x => {
        x.style.backgroundColor = ''
    });
}

function cellCheck(event) {
    var result = clickedCells.includes(event)
    console.log(result)
    return result
}

function gamePlay() {

    letsPlayBtn.disabled
    gameCell.forEach(x => {
        x.addEventListener('click', handleGameCellClick)
    });


    function handleGameCellClick(event) {
        if (cellCheck(Number(event.target.dataset.cellIndex)) === true) {
            alert("Please select again")
        } else {
            if (player1 === activePlayer()) {
                player1Score.push(Number(event.target.dataset.cellIndex));
                clickedCells.push(Number(event.target.dataset.cellIndex));
                event.target.style.backgroundColor = 'blue';
            } else {
                player2Score.push(Number(event.target.dataset.cellIndex));
                clickedCells.push(Number(event.target.dataset.cellIndex));
                event.target.style.backgroundColor = 'red';
            }
        }

        if (clickCount === 8) {
            alert("It's a draw");
            resetBtnClick()
        }

        function checkWin() {
            if (player1 === activePlayer()) {
                if (player1Score.includes(winCombo[0][0]) && player1Score.includes(winCombo[0][1]) && player1Score.includes(winCombo[0][2])) {
                    alert('Player1 Wins');
                    resetBtnClick()
                    winCount.push("1")
                    return true
                } else if (player1Score.includes(winCombo[1][0]) && player1Score.includes(winCombo[1][1]) && player1Score.includes(winCombo[1][2])) {
                    alert('Player1 Wins');
                    resetBtnClick()
                    winCount.push("1")
                    return true
                } else if (player1Score.includes(winCombo[2][0]) && player1Score.includes(winCombo[2][1]) && player1Score.includes(winCombo[2][2])) {
                    alert('Player1 Wins');
                    resetBtnClick()
                    winCount.push("1")
                    return true
                } else if (player1Score.includes(winCombo[3][0]) && player1Score.includes(winCombo[3][1]) && player1Score.includes(winCombo[3][2])) {
                    alert('Player1 Wins');
                    resetBtnClick()
                    winCount.push("1")
                    return true
                } else if (player1Score.includes(winCombo[4][0]) && player1Score.includes(winCombo[4][1]) && player1Score.includes(winCombo[4][2])) {
                    alert('Player1 Wins');
                    resetBtnClick()
                    winCount.push("1")
                    return true
                } else if (player1Score.includes(winCombo[5][0]) && player1Score.includes(winCombo[5][1]) && player1Score.includes(winCombo[5][2])) {
                    alert('Player1 Wins');
                    resetBtnClick()
                    winCount.push("1")
                    return true
                } else if (player1Score.includes(winCombo[6][0]) && player1Score.includes(winCombo[6][1]) && player1Score.includes(winCombo[6][2])) {
                    alert('Player1 Wins');
                    resetBtnClick()
                    winCount.push("1")
                    return true
                }
            } else if (player2 === activePlayer()) {
                if (player2Score.includes(winCombo[0][0]) && player2Score.includes(winCombo[0][1]) && player2Score.includes(winCombo[0][2])) {
                    alert('Player2 Wins');
                    resetBtnClick()
                    winCount.push("2")
                    return true
                } else if (player2Score.includes(winCombo[1][0]) && player2Score.includes(winCombo[1][1]) && player2Score.includes(winCombo[1][2])) {
                    alert('Player2 Wins');
                    resetBtnClick()
                    winCount.push("2")
                    return true
                } else if (player2Score.includes(winCombo[2][0]) && player2Score.includes(winCombo[2][1]) && player2Score.includes(winCombo[2][2])) {
                    alert('Player2 Wins');
                    resetBtnClick()
                    winCount.push("2")
                    return true
                } else if (player2Score.includes(winCombo[3][0]) && player2Score.includes(winCombo[3][1]) && player2Score.includes(winCombo[3][2])) {
                    alert('Player2 Wins');
                    resetBtnClick()
                    winCount.push("2")
                    return true
                } else if (player2Score.includes(winCombo[4][0]) && player2Score.includes(winCombo[4][1]) && player2Score.includes(winCombo[4][2])) {
                    alert('Player2 Wins');
                    resetBtnClick()
                    winCount.push("2")
                    return true
                } else if (player2Score.includes(winCombo[5][0]) && player2Score.includes(winCombo[5][1]) && player2Score.includes(winCombo[5][2])) {
                    alert('Player2 Wins');
                    resetBtnClick()
                    winCount.push("2")
                    return true
                } else if (player2Score.includes(winCombo[6][0]) && player2Score.includes(winCombo[6][1]) && player2Score.includes(winCombo[6][2])) {
                    alert('Player2 Wins');
                    resetBtnClick()
                    winCount.push("2")
                    return true
                }
            } else {
                return false
            }
        }

        event.target.classList.add = 'clicked';
        clickCount++
    }
};











