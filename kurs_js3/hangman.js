var password = "As soon as possible";
password = password.toUpperCase();
var failureCount = 0;
var passwordView = "";
var yesSound = new Audio("yes.wav");
var noSound = new Audio("no.wav");

for(i = 0; i < password.length; i++) {
    if(password.charAt(i) == " ") {
        passwordView = passwordView + " ";
    }
    else {
        passwordView = passwordView + "-";
    }
}

function writePassword() {
    document.getElementById("board").innerHTML = passwordView;
}

var letters = new Array(26);
letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";


function start() {
    var divContent = "";

    for(i = 0; i < 26; i++) {
        var id = "let" + i;
        divContent += '<div class="letter" id= "'+ id +'"onclick="check('+i+')">'+letters[i]+'</div>';
        if (i+1 % 6 == 0)  divContent += '<div style="clear: both;"></div>';
    }

    document.getElementById("alphabet").innerHTML = divContent;
    writePassword();
}

String.prototype.setLetter = function(placement, letter)
{
    if (placement > this.length - 1) return this.toString();
    else return this.substr(0,placement) + letter + this.substr(placement + 1);
}

function check(letterID) {
    //alert(letterID);
    var clicked = false;
    for(i = 0 ; i < password.length; i++) {
        if(password.charAt(i) == letters[letterID]) {
            passwordView = passwordView.setLetter(i,letters[letterID]);
            clicked = true;
        }
    }

    if(clicked == true) {
        var element = "let" + letterID;
        document.getElementById(element).style.background = "green";
        yesSound.play();

    }
    else {
        var element = "let" + letterID;
        document.getElementById(element).style.background = "red";
        document.getElementById(element).setAttribute("onclick",";");
        failureCount++;
        document.getElementById("hang").innerHTML = '<img src="img/s'+failureCount+'.jpg" alt="KONIEC GRY"/>';
        noSound.play();
    }

    //win
    if (password == passwordView) {
        document.getElementById("alphabet").innerHTML = "CONGRATULATIONS!!!"+
        '<br/><br/><span class="reset" onclick="location.reload()" style="cursor: pointer;">Click to restart</span>';
    }

    writePassword();

}

window.onload = start;