class Desencriptador {
    constructor() {}

    desencriptar(cadena) {      
        cadena = cadena.replace(/enter/g, "a")
        cadena = cadena.replace(/imes/g, "e")
        cadena = cadena.replace(/ai/g, "i")
        cadena = cadena.replace(/ober/g, "o")
        cadena = cadena.replace(/ufat/g, "u")
        
        return cadena;
    }
}