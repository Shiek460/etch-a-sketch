//Create a 16X16 grid of square divs

//Button that sends a popup asking for # squares per side of grid
let btn = document.querySelector(".prompt");
let border = document.querySelector(".overlay");
let container = document.querySelector(".grid-container");

let squareWidth = 0;
let numOfSquares = 0;
//Popup, ask for grid size
btn.addEventListener("click", () => {
    //Limit input number to 100
    function verifyGridSize(num) {
        if (num > 100) {
            verifyGridSize(num = prompt("Too many squares. Please choose a number up to 100 to prevent crashing."));
        } else if (isNaN(parseInt(num))) {
            verifyGridSize(num = prompt("Not a number. Please use a number value of 100 or less."))
        }
    }
    verifyGridSize(numOfSquares = prompt("Choose the resolution for your etch-a-sketch. Screen will change to be `your_number X your_number` pixels"));
    btn.textContent = "Shake it to reset!";
    squareWidth = (1/numOfSquares)*100 + "%";
    let totalSquares = numOfSquares*numOfSquares;
    //Remove existing grid, populate SAME total space with new grid
    function deleteGrid() {
        if (container.hasChildNodes()) {
            let pixels = document.querySelectorAll('.pixel');
            for (const pixel of pixels) {
                pixel.remove();
            }
        }
    }
    //Style the divs to appear as a grid
    function createPixel(element, num) {
        element.classList.toggle('pixel');
        if (num == 0) {
            element.setAttribute('style', `width: ${squareWidth}; height: ${squareWidth}; background-color: rgb(255, 200, 130); border-top-left-radius: ${numOfSquares}%`);
        } else if  (num == (numOfSquares - 1)) {
            element.setAttribute('style', `width: ${squareWidth}; height: ${squareWidth}; background-color: rgb(255, 200, 130); border-top-right-radius: ${numOfSquares}%`);
        } else if (num == ((numOfSquares*numOfSquares) - numOfSquares)) {
            element.setAttribute('style', `width: ${squareWidth}; height: ${squareWidth}; background-color: rgb(255, 200, 130); border-bottom-left-radius: ${numOfSquares}%`);
        } else if (num == (numOfSquares*numOfSquares - 1)) {
            element.setAttribute('style', `width: ${squareWidth}; height: ${squareWidth}; background-color: rgb(255, 200, 130); border-bottom-right-radius: ${numOfSquares}%`);
        } else {
            element.setAttribute('style', `width: ${squareWidth}; height: ${squareWidth}; background-color: rgb(255, 200, 130);`);
        }
        return element;
    }
    //Append the divs to ".grid-container" (in index.html)
    function populateGrid(num) {
        deleteGrid();
        for (let i = 0; i < num; i++) {
            let square = document.createElement('div');
            createPixel(square, i);
            container.appendChild(square)
        }
    }
    //Create the divs with JS
    populateGrid(totalSquares);
    let colorType = document.querySelector('select#color-type');
    let choice = colorType.value;
    //Set up a "hover" effect to change div color when mouse passes over them
    let colors = document.querySelectorAll('.pixel');
        //Make each color a random rgb value when mouseover
    colors.forEach((color) => {
        if (choice == 'black') {
            color.addEventListener('mouseenter', () => {
                color.style.backgroundColor = 'rgb(0 0 0)';
            })
        } else {
            let r = (Math.random()*255).toFixed();
            let g = (Math.random()*255).toFixed();
            let b = (Math.random()*255).toFixed();
            color.addEventListener('mouseenter', () => {
                color.style.backgroundColor = `rgb(${r} ${g} ${b})`;
            })
        }
    })
})