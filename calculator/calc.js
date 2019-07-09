
var result = "";
var operationsCodes = "+-*/^";


function showResult() {
    document.getElementById("result").innerHTML = result;
}

function generateButtons() {

    var content = "";

    for(i = 9; i >= 0; i--) {
        content += '<span class="button" onclick="digitButtonClick('+i+')" id ="d_button'+ i +'">'+i+'</span>';
        if ((i-1) % 3 == 0) content += '<div style="clear: both;"></div>';
    }
    
    document.getElementById("digitButtons").innerHTML = content 
    + '<span class="button" onclick="addDot()" id ="d_button_dot">.</span>'  //coma
    + '<span class="button" onclick="calculate() id ="d_button_dot">=</span>'  //equals
    + '<div style="clear: both;"></div>'
    + '<span class="button" onclick="clearWindow()" id ="d_button_dot">C</span>'; //clear
    content = "";

    for(i = 0 ; i < operationsCodes.length; i++) {
        content += '<span class="button"  onclick="operationalButtonClick('+i+')" id ="o_button'
        + i +'">'+ operationsCodes.charAt(i) 
        +'</span>'+'<div style="clear: both;"></div>';
    }
    document.getElementById("operationalButtons").innerHTML = content;

}

function addDot() {
    for(i = result.length - 1; i >= 0 ; i--) {
        if(result.charAt(i) == ".") return;
        //TODO: more than one dot
    }

    result += ".";
    document.getElementById("result").innerHTML = result;

}

function clearWindow() {
    result = "";
    document.getElementById("result").innerHTML = result;
}

function digitButtonClick(id) {
    for (i = 0; i < 10; i++) {
        if(id == i) {
            result += id;
            document.getElementById("result").innerHTML = result;
        }
    }
}

function operationalButtonClick(id) {

    if(result.charAt(result.length - 1) == "*" ||
    result.charAt(result.length - 1) == "+"||
    result.charAt(result.length - 1) == "-"||
    result.charAt(result.length - 1) == "/"||
    result.charAt(result.length - 1) == "^"||
    result.charAt(result.length - 1) == "."
    ) return;

    for (i = 0 ; i < operationsCodes.length; i++) {
        if (id ==i) {
            result += operationsCodes.charAt(i);
            document.getElementById("result").innerHTML = result;
        }
    }
}

function calculate() {
    for(i = 0; i < result.length ; i++) {
        //TODO: determine an order of operations
        //TODO: separate those operations to an array in proper order
    }
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