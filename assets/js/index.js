//direções
let directions = [0, 1, 2, 3];

//criando primeiro tabuleiro e variavel tile para pintar os navios no tabuleiro e atirar (verificando acerto e erro)

let target = document.getElementsByClassName("cell");
//console.log(target);

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
    if (tile.classList.contains("ship") === true) {
      tile.classList.remove("ship");
      tile.classList.add("correct");
    } else {
      tile.classList.add("miss");
    }
    pcShot();
    checkWinCondition();
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

//criando segundo tabuleiro

let tile2 = document.getElementsByClassName("cell2");

let boardA2 = [];
let boardB2 = [];
let boardC2 = [];
let boardD2 = [];
let boardE2 = [];
let boardF2 = [];
let boardG2 = [];
let boardH2 = [];
let boardI2 = [];
let boardJ2 = [];
let boardK2 = [];
let boardL2 = [];
let boardM2 = [];
let boardN2 = [];
let boardO2 = [];
let boardP2 = [];

document.querySelectorAll(".cell2").forEach((tile2) => {
  if (boardA2.length < 16) {
    boardA2.push(tile2);
  } else if (boardB2.length < 16) {
    boardB2.push(tile2);
  } else if (boardC2.length < 16) {
    boardC2.push(tile2);
  } else if (boardD2.length < 16) {
    boardD2.push(tile2);
  } else if (boardE2.length < 16) {
    boardE2.push(tile2);
  } else if (boardF2.length < 16) {
    boardF2.push(tile2);
  } else if (boardG2.length < 16) {
    boardG2.push(tile2);
  } else if (boardH2.length < 16) {
    boardH2.push(tile2);
  } else if (boardI2.length < 16) {
    boardI2.push(tile2);
  } else if (boardJ2.length < 16) {
    boardJ2.push(tile2);
  } else if (boardK2.length < 16) {
    boardK2.push(tile2);
  } else if (boardL2.length < 16) {
    boardL2.push(tile2);
  } else if (boardM2.length < 16) {
    boardM2.push(tile2);
  } else if (boardN2.length < 16) {
    boardN2.push(tile2);
  } else if (boardO2.length < 16) {
    boardO2.push(tile2);
  } else if (boardP2.length < 16) {
    boardP2.push(tile2);
  }
  //WIN CONDITION
  /*   let allShipsInBoard = [];

  document.querySelectorAll(".ship").forEach((ship) => {
    allShipsInBoard.push(ship);
  });
  if (allShipsInBoard.length === 0) {
    alert("YOU WIN!!!");
  } */
});

let gameBoard2 = [
  boardA2,
  boardB2,
  boardC2,
  boardD2,
  boardE2,
  boardF2,
  boardG2,
  boardH2,
  boardI2,
  boardJ2,
  boardK2,
  boardL2,
  boardM2,
  boardN2,
  boardO2,
  boardP2,
];

//TIRO DO COMPUTDOR
function pcShot() {
  let cordx = Math.floor(Math.random() * 16);
  let cordy = Math.floor(Math.random() * 16);
  let shot = gameBoard2[cordx][cordy];
  if (shot.classList.contains("ship2") === true) {
    shot.classList.remove("ship2");
    shot.classList.add("correct");
  } else {
    shot.classList.add("miss");
  }
}

// criando navios

class Ship {
  constructor(size, direction) {
    this.size = size;
    this.direction = direction;
  }
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
      let x = 0;
      let y = 0;
      let isValid = false;
      while (!isValid) {
        // SOUTH
        if (this.direction === 2 && coordY < 16 - this.size) {
          y = +1;
          isValid = true;
        }
        // NORTH
        else if (this.direction === 0 && coordY > 0 + this.size) {
          y = -1;
          isValid = true;
        }
        //EAST
        else if (this.direction === 1 && coordX > 0 + this.size) {
          x = -1;
          isValid = true;
        }
        //WEST
        else if (this.direction === 3 && coordX < 16 - this.size) {
          x = +1;
          isValid = true;
        } else {
          this.direction = (this.direction + 1) % 4;
        }
      }
      for (let i = 0; i < this.size; i++) {
        gameBoard[coordX + i * x][coordY + i * y].classList.add("ship");
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
      let x = 0;
      let y = 0;
      let isValid = false;
      while (!isValid) {
        // SOUTH
        if (this.direction === 2 && coordY < 16 - this.size) {
          y = +1;
          isValid = true;
        }
        // NORTH
        else if (this.direction === 0 && coordY > 0 + this.size) {
          y = -1;
          isValid = true;
        }
        //EAST
        else if (this.direction === 1 && coordX > 0 + this.size) {
          x = -1;
          isValid = true;
        }
        //WEST
        else if (this.direction === 3 && coordX < 16 - this.size) {
          x = +1;
          isValid = true;
        } else {
          this.direction = (this.direction + 1) % 4;
        }
      }
      for (let i = 0; i < this.size; i++) {
        gameBoard[coordX + i * x][coordY + i * y].classList.add("ship");
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
      let x = 0;
      let y = 0;
      let isValid = false;
      while (!isValid) {
        // SOUTH
        if (this.direction === 2 && coordY < 16 - this.size) {
          y = +1;
          isValid = true;
        }
        // NORTH
        else if (this.direction === 0 && coordY > 0 + this.size) {
          y = -1;
          isValid = true;
        }
        //EAST
        else if (this.direction === 1 && coordX > 0 + this.size) {
          x = -1;
          isValid = true;
        }
        //WEST
        else if (this.direction === 3 && coordX < 16 - this.size) {
          x = +1;
          isValid = true;
        } else {
          this.direction = (this.direction + 1) % 4;
        }
      }
      for (let i = 0; i < this.size; i++) {
        gameBoard[coordX + i * x][coordY + i * y].classList.add("ship");
      }
    }
  }
}

//----------------------------------------------- NAVIOS COMPUTADOR --------------------------------------------------------

class DestroyerPC extends Ship {
  constructor(size, direction) {
    super(size, direction);
    this.size = 4;
    this.direction = direction;
  }
  placeShip() {
    let coordX = Math.floor(Math.random() * 16);
    let coordY = Math.floor(Math.random() * 16);
    let place = gameBoard2[coordX][coordY];
    if (place.classList.contains("ship2") == false) {
      if (this.direction === 2 && coordY < 16 - this.size) {
        let x = 0;
        let y = 0;
        let isValid = false;
        while (!isValid) {
          // SOUTH
          if (this.direction === 2 && coordY < 16 - this.size) {
            y = +1;
            isValid = true;
          }
          // NORTH
          else if (this.direction === 0 && coordY > 0 + this.size) {
            y = -1;
            isValid = true;
          }
          //EAST
          else if (this.direction === 1 && coordX > 0 + this.size) {
            x = -1;
            isValid = true;
          }
          //WEST
          else if (this.direction === 3 && coordX < 16 - this.size) {
            x = +1;
            isValid = true;
          } else {
            this.direction = (this.direction + 1) % 4;
          }
        }
        for (let i = 0; i < this.size; i++) {
          gameBoard2[coordX + i * x][coordY + i * y].classList.add("ship2");
        }
      }
    }
  }
}

//criando porta-aviões com tamanho de 5 tiles (1 desse estará no tabuleiro)

class AircraftCarrierPC extends Ship {
  constructor(size, direction) {
    super(size, direction);
    this.size = 5;
  }
  placeShip() {
    let coordX = Math.floor(Math.random() * 16);
    let coordY = Math.floor(Math.random() * 16);
    let place = gameBoard2[coordX][coordY];
    if (place.classList.contains("ship2") == false) {
      let x = 0;
      let y = 0;
      let isValid = false;
      while (!isValid) {
        // SOUTH
        if (this.direction === 2 && coordY < 16 - this.size) {
          y = +1;
          isValid = true;
        }
        // NORTH
        else if (this.direction === 0 && coordY > 0 + this.size) {
          y = -1;
          isValid = true;
        }
        //EAST
        else if (this.direction === 1 && coordX > 0 + this.size) {
          x = -1;
          isValid = true;
        }
        //WEST
        else if (this.direction === 3 && coordX < 16 - this.size) {
          x = +1;
          isValid = true;
        } else {
          this.direction = (this.direction + 1) % 4;
        }
      }
      for (let i = 0; i < this.size; i++) {
        gameBoard2[coordX + i * x][coordY + i * y].classList.add("ship2");
      }
    }
  }
}

//criando cruzador com tamanho de 3 tiles (4 desses estarão no tabuleiro)

class CruiserPC extends Ship {
  constructor(size, direction) {
    super(size, direction);
    this.size = 3;
  }

  checkDirection(x, y) {
    let count1 = this.size;
    let count2 = this.size;
    let count3 = this.size;
    let count4 = this.size;
    for (let i = 0; i < this.size; i++) {
      if (gameBoard2[x][y + i].classList.contains("ship2")) {
        count1--;
      }
    }
    for (let i = 0; i < this.size; i++) {
      if (gameBoard2[x][y - i].classList.contains("ship2")) {
        count2--;
      }
    }
    for (let i = 0; i < this.size; i++) {
      if (gameBoard2[x + i][y].classList.contains("ship2")) {
        count3--;
      }
    }
    for (let i = 0; i < this.size; i++) {
      if (gameBoard2[x - i][y].classList.contais("ship2")) {
        count4--;
      }
    }
    if (count1 === 0) {
      this.direction = 2;
    } else if (count2 === 0) {
      this.direction = 0;
    } else if (count3 === 0) {
      this.direction = 3;
    } else if (count4 === 0) {
      this.direction = 1;
    }
  }

  placeShip() {
    let coordX = Math.floor(Math.random() * 16);
    let coordY = Math.floor(Math.random() * 16);
    let place = gameBoard2[coordX][coordY];
    if (place.classList.contains("ship2") == false) {
      let x = 0;
      let y = 0;
      let isValid = false;
      while (!isValid) {
        //this.checkDirection(coordX, coordY);
        // SOUTH
        if (this.direction === 2 && coordY < 16 - this.size) {
          y = +1;
          isValid = true;
        }
        // NORTH
        else if (this.direction === 0 && coordY > 0 + this.size) {
          y = -1;
          isValid = true;
        }
        //EAST
        else if (this.direction === 1 && coordX > 0 + this.size) {
          x = -1;
          isValid = true;
        }
        //WEST
        else if (this.direction === 3 && coordX < 16 - this.size) {
          x = +1;
          isValid = true;
        } else {
          this.direction = (this.direction + 1) % 4;
        }
      }
      for (let i = 0; i < this.size; i++) {
        gameBoard2[coordX + i * x][coordY + i * y].classList.add("ship2");
      }
    }
  }
}
