// classes

let directions = [0, 1, 2, 3];

let tile = document.getElementsByClassName("cell");

console.log(tile);

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

//criando tabuleiro e variavel tile para pintar os navios no tabuleiro

document.querySelectorAll("td").forEach((tile) => {
  if (boardA.length < 16) {
    boardA.push(tile);
  } else if (boardB.length < 16) {
    boardB.push(tile);
  } else if (boardC.length < 16) {
    boardC.push(tile);
  } else if (boardD.length < 16) {
    boardD.push(tile);
  } else if (boardE.length < 16) {
    boardE.push(tile);
  } else if (boardF.length < 16) {
    boardF.push(tile);
  } else if (boardG.length < 16) {
    boardG.push(tile);
  } else if (boardH.length < 16) {
    boardH.push(tile);
  } else if (boardI.length < 16) {
    boardI.push(tile);
  } else if (boardJ.length < 16) {
    boardJ.push(tile);
  } else if (boardK.length < 16) {
    boardK.push(tile);
  } else if (boardL.length < 16) {
    boardL.push(tile);
  } else if (boardM.length < 16) {
    boardM.push(tile);
  } else if (boardN.length < 16) {
    boardN.push(tile);
  } else if (boardO.length < 16) {
    boardO.push(tile);
  } else if (boardP.length < 16) {
    boardP.push(tile);
  }
  tile.onclick = function () {
    tile.classList.add("ship");
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

// criando navios

class Ship {
  constructor(size, direction) {
    this.size = size;
    this.direction = direction;
  }
  /*   placeShip() {
    let coordX = Math.floor(Math.random() * 16);
    let coordY = Math.floor(Math.random() * 16);
    let place = gameBoard[coordX][coordY];
    if (place.classList.contains("ship") == false) {
      switch (this.direction) {
        // SOUTH
        case 2:
          if (coordY < 16 - this.size) {
            for (let i = 0; i < this.size; i++) {
              gameBoard[coordX][coordY + i].classList.add("ship");
              //place.classList.add("ship");
            }
          }
        // NORTH
        case 0:
          if (coordY > 0 + this.size) {
            for (let i = 0; i < this.size; i++) {
              gameBoard[coordX][coordY - i].classList.add("ship");
              //place.classList.add("ship");
            }
          }
        //EAST
        case 1:
          if (coordX > 0 + this.size) {
            for (let i = 0; i < this.size; i++) {
              gameBoard[coordX - i][coordY].classList.add("ship");
              //place.classList.add("ship");
            }
          }
        //WEST
        case 3:
          if (coordX < 16 - this.size) {
            for (let i = 0; i < this.size; i++) {
              gameBoard[coordX + i][coordY].classList.add("ship");
              //console.log(gameBoard[coordX + i][coordY]);
              //place.classList.add("ship");
            }
          }
      }
    }
  } */
}

//criando destroyer com tamanho de 4 tiles (3 desses estarão no tabuleiro)

class Destroyer extends Ship {
  constructor(size, direction) {
    super(size, direction);
    this.size = 4;
    this.direction = direction;
  }
  placeShip() {
    let coordX = Math.floor(Math.random() * 16);
    let coordY = Math.floor(Math.random() * 16);
    let place = gameBoard[coordX][coordY];
    if (place.classList.contains("ship") == false) {
      if (this.direction === 2 && coordY < 16 - this.size) {
        // SOUTH
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX][coordY + i].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      // NORTH
      if (this.direction === 0 && coordY > 0 + this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX][coordY - i].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      //EAST
      if (this.direction === 1 && coordX > 0 + this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX - i][coordY].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      //WEST
      if (this.direction === 3 && coordX < 16 - this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX + i][coordY].classList.add("ship");
          //console.log(gameBoard[coordX + i][coordY]);
          //place.classList.add("ship");
        }
      }
    }
  }
}

//criando porta-aviões com tamanho de 5 tiles (1 desse estará no tabuleiro)

class AircraftCarrier extends Ship {
  constructor(size, direction) {
    super(size, direction);
    this.size = 5;
  }
  placeShip() {
    let coordX = Math.floor(Math.random() * 16);
    let coordY = Math.floor(Math.random() * 16);
    let place = gameBoard[coordX][coordY];
    if (place.classList.contains("ship") == false) {
      if (this.direction === 2 && coordY < 16 - this.size) {
        // SOUTH
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX][coordY + i].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      // NORTH
      if (this.direction === 0 && coordY > 0 + this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX][coordY - i].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      //EAST
      if (this.direction === 1 && coordX > 0 + this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX - i][coordY].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      //WEST
      if (this.direction === 3 && coordX < 16 - this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX + i][coordY].classList.add("ship");
          //console.log(gameBoard[coordX + i][coordY]);
          //place.classList.add("ship");
        }
      }
    }
  }
}

//criando cruzador com tamanho de 3 tiles (4 desses estarão no tabuleiro)

class Cruiser extends Ship {
  constructor(size, direction) {
    super(size, direction);
    this.size = 3;
  }
  placeShip() {
    let coordX = Math.floor(Math.random() * 16);
    let coordY = Math.floor(Math.random() * 16);
    let place = gameBoard[coordX][coordY];
    if (place.classList.contains("ship") == false) {
      if (this.direction === 2 && coordY < 16 - this.size) {
        // SOUTH
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX][coordY + i].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      // NORTH
      if (this.direction === 0 && coordY > 0 + this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX][coordY - i].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      //EAST
      if (this.direction === 1 && coordX > 0 + this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX - i][coordY].classList.add("ship");
          //place.classList.add("ship");
        }
      }
      //WEST
      if (this.direction === 3 && coordX < 16 - this.size) {
        for (let i = 0; i < this.size; i++) {
          gameBoard[coordX + i][coordY].classList.add("ship");
          //console.log(gameBoard[coordX + i][coordY]);
          //place.classList.add("ship");
        }
      }
    }
  }
}

//criando a classe tiro

class Shot {
  constructor(local) {
    this.local = local;
  }

  //verificando se acertou ou errou
  verify(local) {
    if (local === tile.classList.contains("ship")) {
      tile.classList.add("correct");
    } else {
      tile.classList.add("miss");
    }
  }
}
