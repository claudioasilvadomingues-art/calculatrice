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
        display.value = eval(display.value);
        display.scrollLeft = display.scrollWidth;
    }
    catch{
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

// parenthèses intelligentes ✅
// function addParenthesis() {
//     const text = display.value;

//     const openCount = (text.match(/\(/g) || []).length;
//     const closeCount = (text.match(/\)/g) || []).length;

//     if (text === "0") {
//         display.value = "(";
//         return;
//     }

//     if (openCount === closeCount || text.endsWith("(")) {
//         display.value += "(";
//     } else if (openCount > closeCount) {
//         display.value += ")";
//     }

//     display.scrollLeft = display.scrollWidth;
// }
