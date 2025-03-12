function cifrario(stringa){
    // minuscole ascii 97-122
    // maiuscole ascii 65-90

    var stringa_cifrata = "";

    for (var i = 0; i < stringa.length; i++) {
        var codice = stringa.charCodeAt(i);

        if(codice >= 97 && codice <= 122){
            codice += 3;
            if(codice > 122){
                codice -= 26;
            }
        } else if(codice >= 65 && codice <= 90){
            codice += 3;
            if(codice > 90){
                codice -= 26;
            }
        }

        stringa_cifrata += String.fromCharCode(codice);
    }

    return stringa_cifrata;
}

function inverti(stringa){

    var parole = stringa.split(" ");

    var parole_invertite = parole.reverse();

    var stringa_invertita = parole_invertite.join(" ");

    return stringa_invertita;
}

function toASCII(stringa){

    var stringa_ascii = "";

    for (var i = 0; i < stringa.length; i++) {
        stringa_ascii += stringa.charCodeAt(i);
    }

    return stringa_ascii;
}

function toChar(codici){
    
        var stringa = "";
    
        for (var i = 0; i < codici.length; i++) {
            stringa += String.fromCharCode(codici[i]);
        }
    
        return stringa;
    }
