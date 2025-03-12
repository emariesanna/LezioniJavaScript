function es1(stringa) {

    var count = 0;

    for (var i = 0; i < stringa.length; i++) {
        switch(stringa[i]){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;
            case 'A':
                count++;
                break;
            case 'E':
                count++;
                break;
            case 'I':
                count++;
                break;
            case 'O':
                count++;
                break;
            case 'U':
                count++;
                break;
            default:
        }
    }

    return count;
}

function es2(stringa) {

    var vettore_parole = stringa.split(" ");
    // "ciao come stai" => ["ciao", "come", "stai"]

    for (var i = 0; i < vettore_parole.length; i++) {
        vettore_parole[i] = vettore_parole[i].toLowercase();
        vettore_parole[i][0] = vettore_parole[i][0].toUpperCase();
    }

    return vettore_parole.join(" ");
    // ["Ciao", "Come", "Stai"] => "Ciao Come Stai"
}

function es3(stringa, carattere){

    for (var i = 0; i < stringa.length; i++) {
        switch(stringa[i]){
            case 'a':
                stringa[i] = carattere;
                break;
            case 'e':
                stringa[i] = carattere;
                break;
            case 'i':
                stringa[i] = carattere;
                break;
            case 'o':
                stringa[i] = carattere;
                break;
            case 'u':
                stringa[i] = carattere;
                break;
            case 'A':
                stringa[i] = carattere;
                break;
            case 'E':
                stringa[i] = carattere;
                break;
            case 'I':
                stringa[i] = carattere;
                break;
            case 'O':
                stringa[i] = carattere;
                break;
            case 'U':
                stringa[i] = carattere;
                break;
            default:
        }
    }

    return stringa;
}

function es4(stringa){

    var vettore_parole = stringa.split(" ");

    return vettore_parole.length;
}

function es5(numero, numero_cifre){

    numero *= Math.pow(10, numero_cifre);

    numero = Math.round(numero);

    numero /= Math.pow(10, numero_cifre);

    return numero;
}

function es6(raggio){

    var pi = 3.14159265359;
    var area = raggio * raggio * pi;
    var circonferenza = 2 * raggio * pi;

    return area, circonferenza;
}

function es7(length){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters[Math.floor(Math.random() * charactersLength)];
    }
    return result;
}