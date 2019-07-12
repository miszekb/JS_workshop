var canRegister = false;

function validateMAIL() {
    var userData = new Array(3);

    var nickname = document.getElementsByName("nickname").value;
    //TODO: nickname validation
    userData.push(nickname);

    var email = document.getElementById("email").value;

    for(i = 0; i <= email.length; i++) {
        if(email.charAt(i) == "@") {
            var mailbox = email.substring(0,i);
            var domain = email.substring(i+1, email.length);
        }
    }

    for(i = 0; i < mailbox.length; i++) {
        if (isNaN(parseInt(mailbox.charAt(i), 10)) && 
        mailbox.charAt(i).toLowerCase() == mailbox.charAt(i).toUpperCase()) {
            alert("mam cie HAHA"+i);
        }
    }

    for(i = 0; i < domain.length; i++) {
        if(domain.charAt(i) == ".") {
            var piece1 = domain.substring(0,i);
            var piece2 = domain.substring(i+1, email.length);
        }
    }

    for(i = 0; i < piece1.length; i++) {
        if (isNaN(parseInt(piece1.charAt(i), 10)) && 
        piece1.charAt(i).toLowerCase() == piece1.charAt(i).toUpperCase()) {
        alert("mam cie HAHA"+i);
        }
    }

    for(i = 0; i < piece2.length; i++) {
        if (isNaN(parseInt(piece2.charAt(i), 10)) l&& 
        piece2.charAt(i).toLowerCase() == piece2.charAt(i).toUpperCase()) {
        alert("mam cie HAHA"+i);
        }
    }
}

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

function validatePASS() {
    const password = document.getElementById("pwd").value;
    var hasSign = false;
    var hasUppercase = false;

    if(password.length < 8) {
        alert("Password too short!\n");
        return;
    }

    for(i = 0; i < password.length; i++) {
        if(password.charAt(i) == password.charAt(i).toUpperCase()) {
            hasUppercase = true;
            alert(password.charAt(i));
        }
        for(j = 0; j < specialChars.length; j++) {
            if(password.charAt(i) == specialChars.charAt(j)) {
                hasSign = true;
            }
        }
    }

    if(hasSign && hasUppercase) {
        if()
        alert("ok");
    }
    else alert("No uppercase letter and/or special sign!\n");

    if(password != document.getElementById("rep_pwd").value) alert("Passwords does not match!");

}

function validation() {
    validateMAIL();
    validatePASS();
    if(canRegister) alert("You've been registered successfully!")
}

