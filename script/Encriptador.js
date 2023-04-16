class Encriptador {
    constructor () {}

    encriptar(cadena) {
        const vocales = new Map([
            ["a", "enter"],
            ["e", "imes"],
            ["i", "ai"],
            ["o", "ober"],
            ["u", "ufat"],
        ])

        for (let posicion = 0; posicion < cadena.length; posicion++) {
            console.log(cadena)

            let cifrado = vocales.get(cadena.at(posicion))

            if(cifrado !== undefined){
                cadena = this.aplicarCifrado(cifrado, posicion, cadena)
                posicion += (cifrado.length)-1
            }
        }

        return cadena
    }

    aplicarCifrado(cifrado, posicion, cadena) {
        let primeraMitad = cadena.slice(0, posicion)
        let segundaMitad = cadena.slice(posicion+1, cadena.length)

        return primeraMitad.concat(cifrado, segundaMitad)
    }
}