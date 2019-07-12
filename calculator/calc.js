
var result = "";
var operationsCodes = "+-*/^";


function showResult() {
    document.getElementById("result").innerHTML = result;
}

function generateButtons() {
    initKeys();
    var content = "";

    for(i = 9; i >= 0; i--) {
        content += '<span class="dbutton" onclick="digitButtonClick('+i+')" id ="d_button'+ i +'">'+i+'</span>';
        if ((i-1) % 3 == 0) content += '<div style="clear: both;"></div>';
    }
    
    document.getElementById("digitButtons").innerHTML = content 
    + '<span class="button" onclick="addDot()" id ="d_button_dot">.</span>'  //coma
    + '<span class="button" onclick="calculate()" id ="d_button_equals">=</span>'  //equals
    + '<div style="clear: both;"></div>'
    + '<span class="button" onclick="clearWindow()" id ="d_button_dot">C</span>' //clear
    + '<span class="button" onclick="Backspace()" id ="d_button_dot"> <--- </span>';
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

function Backspace() {
    result = result.substr(0 , result.length - 1);
    document.getElementById("result").innerHTML = result;
}

function clearWindow() {
    result = "";
    document.getElementById("result").innerHTML = result;
}

function digitButtonClick(id) {
    if (result.length == 21) {
        alert("Out of range :(");
        return;
    }

    if(result.charAt(result.length - 1) == "0") return;

    for (i = 0; i < 10; i++) {
        if(id == i) {
            result += id;
            document.getElementById("result").innerHTML = result;
        }
    }
}

function operationalButtonClick(id) {

    if (result.length == 21) {
        alert("Out of range :(");
        return;
    }

    if(result.charAt(result.length - 1) == "*" ||
    result.charAt(result.length - 1) == "+"||
    result.charAt(result.length - 1) == "-"||
    result.charAt(result.length - 1) == "/"||
    result.charAt(result.length - 1) == "^"||
    result.charAt(result.length - 1) == "."
    ) return;

    for (i = 0 ; i <= operationsCodes.length; i++) {
        if (id ==i) {
            result += operationsCodes.charAt(i);
            document.getElementById("result").innerHTML = result;
        }
    }
}

function calculate() {
    var values = new Array();
    var currentOperations = new Array();
    var cursor = 0;

    console.log(result);
    for(i = 0; i <= result.length ; i++) {
        if(result.charAt(i) == "*" || result.charAt(i) == "/" ||
        result.charAt(i) == "+" || result.charAt(i) == "-" ||
        i == result.length) 
        {
            currentOperations.push(result.charAt(i));
            values.push(parseFloat(result.substring(cursor, i)));
            cursor = i+1;
        }
        //TODO: determine an order of operations
        //TODO: separate those operations to an array in proper order
    }
    currentOperations.pop(currentOperations.length);

    var temp = 0;
    var tempContainer = new Array();
    var tempOperationsContainer = new Array();

    for(i = 0; i < currentOperations.length; i++) {
        if(currentOperations[i] == "*" || currentOperations[i] == "/") {
            for(j = 0; j < values.slice(0,i).length; j++) {
                tempContainer.push(values.slice(0,i)[j])
            }
            
            if(currentOperations[i] == "*") {
 
                temp = multiply(values[i], values[i+1]);
                tempContainer.push(temp);
            }
            if(currentOperations[i] == "/") {
                temp = divide(values[i], values[i+1]);
                tempContainer.push(temp);
            }

            for(j = 0; j < values.slice(i+2, values.length).length; j++) {
                tempContainer.push(values.slice(i+2, values.length)[j]);
             }
            
             values = tempContainer;
             console.log(values);
             console.log(currentOperations);  

             tempContainer = [];
        }
    }

    for(i = 0; i < currentOperations.length; i++) {
        if(currentOperations[i] == "+" || currentOperations[i] == "-") {
            for(j = 0; j < values.slice(0,i).length; j++) {
                tempContainer.push(values.slice(0,i)[j])
            }
            
            if(currentOperations[i] == "*") {
 
                temp = add(values[i], values[i+1]);
                tempContainer.push(temp);
            }
            if(currentOperations[i] == "-") {
                temp = subtract(values[i], values[i+1]);
                tempContainer.push(temp);
            }

            for(j = 0; j < values.slice(i+2, values.length).length; j++) {
                tempContainer.push(values.slice(i+2, values.length)[j]);
             }
            
             values = tempContainer;
             console.log(values);
             console.log(currentOperations);  

             tempContainer = [];
        }
    }
    result = values[0].toString();
    document.getElementById("result").innerHTML = result;
}

function add(param1, param2) {
    result = param1 + param2;
    return result;
}

function subtract(param1, param2) {
    result = param1 - param2;
    return result;
}

function divide(param1, param2) {
    result = param1 / param2;
    return result;
}

function multiply(param1, param2) {
    result = param1 * param2;
    return result;
}

function root(param1, param2) {
    result = Math.root(param1, param2);
}

function power(param1, param2) {
    result = Math.pow(param1, param2);
}

window.onload = generateButtons;

function initKeys() {
    document.addEventListener('keydown', function(event) {
        if(parseInt(String.fromCharCode(event.keyCode)) >= 0 && parseInt(String.fromCharCode(event.keyCode)) <= 9) {
            console.log("EE");
            digitButtonClick(parseInt(String.fromCharCode(event.keyCode)));
        }
        else {
            switch (event.keyCode) {
                case 190:
                    addDot();
                    break;
                    /*
                case 189:
                    console.log("-");
                    result += String.fromCharCode(event.keyCode);
                    document.getElementById("result").innerHTML = result;
                    break;
                default:
                    console.log(event.keyCode);
                    break; */

            }
        }
    });
}