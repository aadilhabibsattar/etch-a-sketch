const container = document.querySelector('.container');

let gridSize = 16;

function randomColor() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`;  // Fix the color format
}

function createGrid(size) {
    container.innerHTML = "";  // Clear any existing grid

    const containerWidth = window.innerWidth * 0.75;  // Adjust to container's width (70% of viewport width)
    const containerHeight = window.innerHeight * 0.75;  // Adjust to container's height (70% of viewport height)

    const cellSize = Math.floor(Math.min(containerWidth, containerHeight) / size);  // Ensure square grid

    const gridSideLength = size * cellSize;  // Calculate grid side length
    container.style.width = `${gridSideLength}px`;  // Set container width
    container.style.height = `${gridSideLength}px`;  // Set container height

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;  // Set width of each cell
        cell.style.height = `${cellSize}px`;  // Set height of each cell
        container.appendChild(cell);

        // Change color on hover
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = randomColor();
        });
    }
}

const resetGridButton = document.querySelector('.reset-grid-btn');

function gridSizePrompt() {
    let size;
    while (true) {
        size = parseInt(prompt("Please enter a grid size (1-100)"));
        if (!isNaN(size) && size > 0 && size <= 100) break;
        alert("Invalid input! Please enter a number between 1 and 100.");
    }   
    return size;
}

createGrid(gridSize);

resetGridButton.addEventListener("click", () => {
    let newSize = gridSizePrompt();
    gridSize = newSize;
    createGrid(gridSize);
});
