// calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearAppendToDisplay() {
    display.value = display.value.slice(0, -1);
}

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
