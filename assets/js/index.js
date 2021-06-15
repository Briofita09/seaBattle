// classes
// criando navios

class Ship {
  constructor(size, position) {
    this.size = size;
  }
}

//criando destroyer com tamanho de 4 tiles (3 desses estarão no tabuleiro)

class Destroyer extends Ship {
  constructor(size, position) {
    super(size, position);
    this.size = 4;
  }

  placeDestroyer() {
    return tile.classList.add("ship");
  }
}

//criando porta-aviões com tamanho de 5 tiles (1 desse estará no tabuleiro)

class AircraftCarrier extends Ship {
  constructor(size, position) {
    super(size, position);
    this.size = 5;
  }
  placeAircraftCarrier() {
    return tile.classList.add("ship");
  }
}

//criando cruzador com tamanho de 3 tiles (4 desses estarão no tabuleiro)

class Cruiser extends Ship {
  constructor(size, position) {
    super(size, position);
    this.size = 3;
  }
  placeCruiser() {
    return tile.classList.add("ship");
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
