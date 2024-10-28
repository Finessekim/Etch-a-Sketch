const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize-button');

function createGrid(squaresPerSide) {
    container.innerHTML = '';

    const squareSize = 960/squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const div = document.createElement('div');
        div.classList.add('square');

        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener('mouseenter', function() {
            div.style.backgroundColor = getRandomColor();
        });
        
        container.appendChild(div);
    }
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters [Math.floor(Math.random() * 16)];
    }

    return color;
}

//(Resize button) Event listener
resizeButton.addEventListener('click', function() {
    let squaresPerSide = prompt("Enter the numbers of squares per side(Maximum 100): ");

    //validate
    squaresPerSide = parseInt(squaresPerSide);
    if (squaresPerSide >= 0 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

createGrid(32);