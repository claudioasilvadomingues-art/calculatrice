// calculator program

// const display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){

//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error";
//     }
// }

// function clearAppendToDisplay() {
//     display.value = display.value.slice(0, -1);
// }

/*MORE BUTTONS*/

function toggleAdvanced() {
    document
        .getElementById("advanced-keys")
        .classList.toggle("hidden");
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}


// display scroll

function appendToDisplay(input){
    display.value += input;
    display.scrollLeft = display.scrollWidth;
}

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
    display.value = "";
    display.scrollLeft = 0;
}

function calculate(){
    try{
        display.value = eval(display.value);
        display.scrollLeft = display.scrollWidth;
    }
    catch(error){
        display.value = "Error";
    }
}

function clearAppendToDisplay() {
    display.value = display.value.slice(0, -1);
    display.scrollLeft = display.scrollWidth;
}


function addParenthesis() {
    const text = display.textContent;
    const open = (text.match(/\(/g) || []).length;
    const close = (text.match(/\)/g) || []).length;

    if (open === close || text.endsWith("(")) {
        appendToDisplay("(");
    } else {
        appendToDisplay(")");
    }
}
