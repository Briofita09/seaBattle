//criando tabuleiro e variavel tile para pintar os navios no tabuleiro

let boardA = [];
let boardB = [];
let boardC = [];
let boardD = [];
let boardE = [];
let boardF = [];
let boardG = [];
let boardH = [];
let boardI = [];
let boardJ = [];
let boardK = [];
let boardL = [];
let boardM = [];
let boardN = [];
let boardO = [];
let boardP = [];
document.querySelectorAll(".cell").forEach((tile) => {
  if (boardA.length < 16) {
    boardA.push(tile.textContent);
  } else if (boardB.length < 16) {
    boardB.push(tile.textContent);
  } else if (boardC.length < 16) {
    boardC.push(tile.textContent);
  } else if (boardD.length < 16) {
    boardD.push(tile.textContent);
  } else if (boardE.length < 16) {
    boardE.push(tile.textContent);
  } else if (boardF.length < 16) {
    boardF.push(tile.textContent);
  } else if (boardG.length < 16) {
    boardG.push(tile.textContent);
  } else if (boardH.length < 16) {
    boardH.push(tile.textContent);
  } else if (boardI.length < 16) {
    boardI.push(tile.textContent);
  } else if (boardJ.length < 16) {
    boardJ.push(tile.textContent);
  } else if (boardK.length < 16) {
    boardK.push(tile.textContent);
  } else if (boardL.length < 16) {
    boardL.push(tile.textContent);
  } else if (boardM.length < 16) {
    boardM.push(tile.textContent);
  } else if (boardN.length < 16) {
    boardN.push(tile.textContent);
  } else if (boardO.length < 16) {
    boardO.push(tile.textContent);
  } else if (boardP.length < 16) {
    boardP.push(tile.textContent);
  }
  tile.onclick = function () {
    tile.classList.add("ship");
    verify("a1");
  };
});

let gameBoard = [
  boardA,
  boardB,
  boardC,
  boardD,
  boardE,
  boardF,
  boardG,
  boardH,
  boardI,
  boardJ,
  boardK,
  boardL,
  boardM,
  boardN,
  boardO,
  boardP,
];

console.log(gameBoard);

for (let i = 0; i < gameBoard.length; i++) {
  for (let j = 0; j < gameBoard[i].length; j++) {
    if (gameBoard[i][j].tile.classList.contains("ship") !== "ship") {
      tile.classList.add("ship");
    }
  }
}
