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
});

let allShipsInBoard = [];
document.querySelectorAll(".ship").forEach((ship) => {
  allShipsInBoard.push(ship);
});
console.log(allShipsInBoard.length);
/* //condição de vitória
/* console.log(allShips);
while (allShips.length === 0) {
  console.log("YOU WIN!!!"); 
} */
