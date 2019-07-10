function validateMAIL() {
    var canRegister = false;
    var userData = new Array(3);

    var nickname = document.getElementsByName("nickname").values;
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
        if (isNaN(parseInt(piece2.charAt(i), 10)) && 
        piece2.charAt(i).toLowerCase() == piece2.charAt(i).toUpperCase()) {
        alert("mam cie HAHA"+i);
        }
    }
}

function validatePASS() {

}

function validation() {
    validateMAIL();
    validatePASS();
}

