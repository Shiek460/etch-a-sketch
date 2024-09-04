//Create a 16X16 grid of square divs

//Button that sends a popup asking for # squares per side of grid
let btn = document.querySelector(".prompt");
let border = document.querySelector(".overlay");
let container = document.querySelector(".grid-container");

let square = document.createElement('div');

let squareWidth = 0;
let numOfSquares = 0;
//Popup, ask for grid size
btn.addEventListener("click", () => {
    //Limit input number to 100
    function verifyGridSize(num) {
        //switch case - is number or is greater than 100 **ADD THIS**
        if (num > 100) {
            verifyGridSize(num = prompt("Too many squares. Please choose a number up to 100 to prevent crashing."));
        }
    }
    verifyGridSize(numOfSquares = prompt("How many squares do you want in your etch-a-sketch?"));
    border.style.display = "flex";
    btn.textContent = "Refresh";
    squareWidth = (1/numOfSquares)*100 + "%";
    let totalSquares = numOfSquares*numOfSquares;
    //Remove existing grid, populate SAME total space with new grid
    function deleteGrid(num, element) {
        if (container.hasChildNodes()) {
            for (let i = 0; i < num; i++) {
                element.remove();
            }
        }
    }
    function createPixel(element, num) {
        element.classList.toggle('pixel');
        element.setAttribute('style', `width: ${squareWidth}; height: ${squareWidth}; border: solid 1px yellow; background-color: red;`);
        element.textContent = num;
        console.log(element.textContent)
        return element;
    }
    function populateGrid(num) {
        for (let i = 0; i < num; i++) {
            createPixel(square, i);
            container.appendChild(square)
        }
    }
    //Create the divs with JS
    deleteGrid(totalSquares, square);
    populateGrid(totalSquares);
})

//Style the divs to appear as a grid

//Append the divs to ".grid-container" (in index.html)

//Set up a "hover" effect to change div color when mouse passes over them

