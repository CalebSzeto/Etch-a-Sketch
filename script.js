
const container = document.querySelector(".container");
const btn = document.querySelector(".btn"); 
const resetBtn = document.querySelector(".reset")

//Make the grid out of squares with percentages to dynamically scale
function makeEtchSketch(gridLength){
    const divGridLength = 100/gridLength;

    for(let i = 0; i < gridLength**2; i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("divSquares");
        createDiv.style.height = `${divGridLength}%`;
        createDiv.style.width = `${divGridLength}%`;

        container.appendChild(createDiv);
        createDiv.addEventListener("mouseover",changeColor);
    }

}

function changeColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    this.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function popUp(){
    
    while(true){
        let userInput = prompt("Enter the number of squares per side for the new grid.","");

        //Need to account for cancel as parseInt(userInput) will return NaN 
        if(userInput === null) return;

        userInput = parseInt(userInput);

        if(!Number.isInteger(userInput) || userInput > 100 || userInput <= 0){
            alert("Enter an integer (exclusive) between 0 - 101.")
            continue;
        }
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        makeEtchSketch(+userInput);
        break;
    }
}

function resetColor(){
    const divSquares = document.querySelectorAll(".divSquares");
    divSquares.forEach((element) => {element.style.backgroundColor = "white"});
}

const gridLength = 16;
makeEtchSketch(gridLength);

btn.addEventListener("click", popUp)
resetBtn.addEventListener("click",resetColor)












