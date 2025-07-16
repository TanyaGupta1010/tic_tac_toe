let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // columns
  [0,4,8],[2,4,6]          // diagonals
];

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

cells.forEach(cell => {
cell.addEventListener("click", () => handleClick(cell));
});

function handleClick(cell) {
const index = cell.getAttribute("data-index");
if (gameState[index] !== "" || checkWinner()) return;

gameState[index] = currentPlayer;
cell.innerText = currentPlayer;

if (checkWinner()) {
    statusText.innerText = `${currentPlayer} wins!`;
} else if (!gameState.includes("")) {
    statusText.innerText = `It's a draw!`;
} else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `${currentPlayer}'s turn`;
}
}

function checkWinner() {
return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
});
}

function restartGame() {
currentPlayer = "X";
gameState = ["", "", "", "", "", "", "", "", ""];
cells.forEach(cell => (cell.innerText = ""));
statusText.innerText = `${currentPlayer}'s turn`;
}
