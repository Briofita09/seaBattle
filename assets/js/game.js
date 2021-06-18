window.addEventListener("load", function () {
  const destroyer1 = new Destroyer(
    null,
    Math.floor(Math.random() * directions.length)
  );
  const destroyer2 = new Destroyer(
    null,
    Math.floor(Math.random() * directions.length)
  );
  const destroyer3 = new Destroyer(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const airCraftCarrier = new AircraftCarrier(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const cruiser1 = new Cruiser(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const cruiser2 = new Cruiser(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const cruiser3 = new Cruiser(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const cruiser4 = new Cruiser(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const destroyerPc1 = new DestroyerPC(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const destroyerPc2 = new DestroyerPC(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const destroyerPc3 = new DestroyerPC(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const airCraftCarrierPc = new AircraftCarrierPC(
    null,
    Math.floor(Math.random() * directions.length)
  );

  const cruiserPc1 = new CruiserPC(
    null,
    Math.floor(Math.random() * directions.length)
  );
  const cruiserPc2 = new CruiserPC(
    null,
    Math.floor(Math.random() * directions.length)
  );
  const cruiserPc3 = new CruiserPC(
    null,
    Math.floor(Math.random() * directions.length)
  );
  const cruiserPc4 = new CruiserPC(
    null,
    Math.floor(Math.random() * directions.length)
  );
  destroyerPc1.placeShip();
  destroyerPc2.placeShip();
  destroyerPc3.placeShip();
  airCraftCarrierPc.placeShip();
  cruiserPc1.placeShip();
  cruiserPc2.placeShip();
  cruiserPc3.placeShip();

  destroyer1.placeShip();
  destroyer2.placeShip();
  destroyer3.placeShip();
  airCraftCarrier.placeShip();
  cruiser1.placeShip();
  cruiser2.placeShip();
  cruiser3.placeShip();
});

//checar condição de vitoria (essa função é chamada no index.js junto a checagem de tiro)

let x = document.getElementsByClassName("ship");

let y = document.getElementsByClassName("ship2");

let gameOver = document.getElementById("main");

function checkWinCondition() {
  if (x.length === 0) {
    gameOver.innerHTML = `<img src="./assets/images/winner.jpg" class="showWin" />`;
  } else if (y.length === 0) {
    gameOver.innerHTML = `<img src="./assets/images/loser.jpg" class="showLose" />`;
  }
}
