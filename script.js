const container = document.querySelector('.container');

let gridSize = 50;

function randomColor(opacity = 1) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;  
}

function createGrid(size) {
    container.innerHTML = ""; 

    const containerWidth = window.innerWidth * 0.75;  
    const containerHeight = window.innerHeight * 0.75;  

    const cellSize = Math.floor(Math.min(containerWidth, containerHeight) / size);

    const gridSideLength = size * cellSize;  
    container.style.width = `${gridSideLength}px`;  
    container.style.height = `${gridSideLength}px`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`; 
        cell.style.height = `${cellSize}px`;  
        container.appendChild(cell);

        let opacity = 1;
        let hoverCount = 0;

        cell.addEventListener("mouseover", () => {
            hoverCount++;
            if (hoverCount < 10) {
                opacity -= 0.1;
                const newColor = randomColor(opacity); // Darken progressively by 10%
                cell.style.backgroundColor = newColor;
                console.log(newColor);
            } else {
                cell.style.backgroundColor = 'black';
            }
            
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
