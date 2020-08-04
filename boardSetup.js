let mode = 6;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const headerH1 = document.querySelector("h1");
const configurationBar = document.querySelector("#configuration-bar");
const playAgainButton = document.getElementById("play-again");
const modeButtons = document.querySelectorAll(".mode");
const easyBtn = document.getElementById("easy-btn");
const hardBtn = document.getElementById("hard-btn");

const generateRandomColor = (num) => {
    let colorArr = [];
    for(let i = 0; i < num; i++) {
        colorArr.push(randomColor());
    }
    return colorArr;
}

const randomColor = () => {
    const redVal = Math.floor(Math.random() * 256);
    const greenVal = Math.floor(Math.random() * 256);
    const blueVal = Math.floor(Math.random() * 256);
    return "rgb(" + redVal + ", " + greenVal + ", " + blueVal + ")";
}

const fillColorSquare = (color) => {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

const chooseGuessColor = (sqr) => {
    const randomSquare = Math.floor(Math.random() * sqr);
    return colors[randomSquare];
}


const reset = () => {
    colors = generateRandomColor(mode);
    selectedColor = chooseGuessColor(mode);
    for(let i = 0; i < mode; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    colorDisplay.innerHTML = selectedColor.toUpperCase();
    messageDisplay.innerHTML = "Guess it!";
    headerH1.style.backgroundColor = "steelblue";
}

reset();

easyBtn.addEventListener("click", function(){
    mode = 3;
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    reset();
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }       
    }
})

hardBtn.addEventListener("click", function(){
    mode = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    reset();
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

// for(let i = 0; i < modeButtons.length; i++) {
//     modeButtons[i].addEventListener("click", function(){
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");
//         this.innerHTML === "Easy" ? mode = 3 : mode = 6;
//         reset();
//     })
// }

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i] 

    // Add Event listener for clicking the colors
    squares[i].addEventListener("click", function(){
        clickedColor = this.style.backgroundColor; 
        if(clickedColor === selectedColor) {
            fillColorSquare(clickedColor);
            messageDisplay.innerHTML = "Correct!";
            headerH1.style.backgroundColor = selectedColor;
            playAgainButton.innerHTML = "Play Again?";
        } else {
            messageDisplay.innerHTML = "Try again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

playAgainButton.addEventListener("click", function(){
    reset();
})


