// display
const display = document.getElementById("display");

// affichage + scroll
function appendToDisplay(input){
    if (display.value === "0") {
        display.value = input;
    } else {
        display.value += input;
    }
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
    display.value = "0";
    display.scrollLeft = 0;
}

function clearAppendToDisplay() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
    display.scrollLeft = display.scrollWidth;
}

function calculate(){
    try{
        let expression = display.value;
        let result = eval(expression);

        display.value = result;

        console.log("Expression:", expression);
        console.log("Result:", result);

        addHistory(expression, result);
    }
    catch(error){
        console.log(error);
        display.value = "Error";
    }
}

// menu more
function toggleAdvanced() {
    document
        .getElementById("advanced-keys")
        .classList.toggle("hidden");
}

// racine carrée
function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

/*-----------------------
 history
------------------------*/

let history = [];

function addHistory(expression, result) {
    history.push(`${expression} = ${result}`);
    updateHistory();
}

function updateHistory() {
    const historyDiv = document.getElementById("history");

    if (!historyDiv) {
        console.error("Element #history introuvable");
        return;
    }

    historyDiv.innerHTML = "";

    history.forEach(item => {
        let p = document.createElement("p");
        p.textContent = item;
        historyDiv.appendChild(p);
    });
}

