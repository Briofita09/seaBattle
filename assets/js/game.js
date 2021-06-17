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
  cruiserPc4.placeShip();

  destroyer1.placeShip();
  destroyer2.placeShip();
  destroyer3.placeShip();
  airCraftCarrier.placeShip();
  cruiser1.placeShip();
  cruiser2.placeShip();
  cruiser3.placeShip();
  cruiser4.placeShip();

  let allShips = [];
  document.querySelectorAll(".ship").forEach((inBoard) => {
    allShips.push(inBoard);
  });
  if (allShips.length !== 29) {
    document.location.reload(true);
  }

  let allShips2 = [];
  document.querySelectorAll(".ship2").forEach((inBoard2) => {
    allShips2.push(inBoard2);
  });
  if (allShips2.length !== 29) {
    document.location.reload(true);
  }
});

//checar condição de vitoria (essa função é chamada no index.js junto a checagem de tiro)

let allShipsHuman = [];
let allShipsPc = [];
document.querySelectorAll(".ship").forEach((x) => {
  allShipsHuman.push(x);
});
document.querySelectorAll(".ship2").forEach((y) => {
  allShipsPc.push(y);
});
console.log(allShipsHuman);
console.log(allShipsPc);
function checkWinCondition() {
  if (allShipsHuman.length === 0) {
    alert("YOU LOSE");
  }

  if (allShipsPc.length === 0) {
    alert("YOU WIN");
  }
}
