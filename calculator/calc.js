
var result = 0;
var operationsCodes = "+-*/^";

function showResult() {

}

function generateButtons() {

    var content = "";

    for(i = 9; i >= 0; i--) {
        content += '<span class="button" id ="d_button'+ i +'">'+i+'</span>';
        if ((i-1) % 3 == 0) content += '<div style="clear: both;"></div>';
    }
    
    document.getElementById("digitButtons").innerHTML = content + '<span class="button" id ="d_button_dot">.</span>';
    content = "";
    for(i = 0 ; i < operationsCodes.length; i++) {
        content += '<span class="button" id ="o_button'+ operationsCodes.charAt(i) +'">'+ operationsCodes.charAt(i) +'</span>'+'<div style="clear: both;"></div>';
    }

    document.getElementById("operationalButtons").innerHTML = content;

}

function add(param1, param2) {
    result = param1 + param2;
}

function subtract(param1, param2) {
    result = param1 - param2;
}

function divide(param1, param2) {
    result = param1 / param2;
}

function multiply(param1, param2) {
    result = param1 * param2;
}

function root(param1, param2) {
    result = Math.root(param1, param2);
}

function power(param1, param2) {
    result = Math.pow(param1, param2);
}

window.onload = generateButtons;