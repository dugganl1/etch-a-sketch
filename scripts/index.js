const gridSize = 25;
let isDrawMode = true;

function createGrid(size) {
  const container = document.getElementById("gridContainer");
  container.innerHTML = ""; // Clear any existing grid

  const itemSize = 960 / size; // Calculate size of each grid item

  // Calculate border width based on grid size
  // This formula reduces border width as grid size increases
  const borderWidth = Math.max(1, Math.min(2, 16 / size));

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${itemSize}px`;
    gridItem.style.height = `${itemSize}px`;
    gridItem.style.borderWidth = `${borderWidth}px`;

    // Add event listeners for hover effect
    gridItem.addEventListener("mouseenter", () => {
      if (isDrawMode) {
        //gridItem.style.backgroundColor = "red";
        gridItem.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
      } else {
        gridItem.style.backgroundColor = "";
      }
    });

    container.appendChild(gridItem);
  }
}

function toggleMode() {
  isDrawMode = !isDrawMode;
  const toggleButton = document.getElementById("toggleMode");
  toggleButton.textContent = isDrawMode ? "Draw Mode" : "Erase Mode";
}

function updateGridSize() {
  const size = this.value;
  document.getElementById("sizeValue").textContent = `${size} x ${size}`;
  createGrid(size);
}

// Create a 16x16 grid by default
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMode");
  toggleButton.addEventListener("click", toggleMode);

  const slider = document.getElementById("gridSize");
  slider.addEventListener("input", updateGridSize);

  //Initialize the default 16x16 grid
  createGrid(gridSize);
});

// You can call createGrid(n) with different values to change the grid size
// For example: createGrid(32) will create a 32x32 grid
