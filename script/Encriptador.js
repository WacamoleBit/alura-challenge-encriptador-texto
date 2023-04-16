class Encriptador {
    constructor () {}

    encriptar(cadena) {
        for (let posicion = 0; posicion < cadena.length; posicion++) {
            console.log(cadena)
            if(cadena.at(posicion) == "a") {
                let cifradoA = "enter";

                cadena = this.aplicarCifrado(cifradoA, posicion, cadena)
                posicion += (cifradoA.length)-1
            }
            if(cadena.at(posicion) == "e") {
                let cifradoE = "imes";

                cadena = this.aplicarCifrado(cifradoE, posicion, cadena)
                posicion += (cifradoE.length)-1
            }
            if(cadena.at(posicion) == "i") {
                let cifradoI = "ai";

                cadena = this.aplicarCifrado(cifradoI, posicion, cadena)
                posicion += (cifradoI.length)-1
            }
            if(cadena.at(posicion) == "o") {
                let cifradoO = "ober";

                cadena = this.aplicarCifrado(cifradoO, posicion, cadena)
                posicion += (cifradoO.length)-1
            }
            if(cadena.at(posicion) == "u") {
                let cifradoU = "ufat";

                cadena = this.aplicarCifrado(cifradoU, posicion, cadena)
                posicion += (cifradoU.length)-1
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