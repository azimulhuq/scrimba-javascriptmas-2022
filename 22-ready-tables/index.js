// Generate table numbers
function getReadyTables() {
  const readyTables = [];
  for (let i = 0; i < 2; i++) {
    readyTables.push(Math.floor(Math.random() * 20) + 1);

    if (readyTables[0] === readyTables[1]) {
      readyTables.pop();
      i--;
    }
  }

  return readyTables;
}

// Display table numbers
const displayTables = (tables) => {
  document.querySelector("#tables").innerHTML = tables
    .map((table) => `<div class="table">${table}</div>`)
    .join("");
};

displayTables(getReadyTables());
