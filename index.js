const form = document.querySelector("form");
const sheepInput = document.querySelector("#numSheep");

// === State ===
const state = {
  start: ["sheep"],
  target: [],
};

// Add event listeners to form and input
// let numSheepToAdd = 0;

// sheepInput.addEventListener("change", function (e) {
//   numSheepToAdd = e.target.value;
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const numSheepToAdd = sheepInput.value;
  for (let i = 0; i < numSheepToAdd; i++) {
    state.start.push("sheep");
  }
  render();
});

/** Moves a sheep from start to target */
function moveSheep() {
  // TODO
  const sheepToMove = state.start.pop();
  state.target.push(sheepToMove);
  render();
}

// === Render ===

/** Renders sheep on the starting bank */
function renderStartSheep() {
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    // TODO: Add event listener so the sheep moves when clicked
    li.addEventListener("click", function () {
      moveSheep();
    });
    return li;
  });

  const startingBank = document.querySelector("#startingBank ul");
  startingBank.replaceChildren(...startingSheep);
}

/** Renders sheep on the target bank */
function renderTargetSheep() {
  const targetSheep = state.target.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    return li;
  });

  const targetBank = document.querySelector("#targetBank ul");
  targetBank.replaceChildren(...targetSheep);
}

function render() {
  renderStartSheep();
  renderTargetSheep();
}

// === Script ===
// Initial render
render();

// TODO: Add sheep to the starting bank when the form is submitted
