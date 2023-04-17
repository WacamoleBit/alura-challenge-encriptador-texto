const inputTexto = document.getElementById("texto-ingresado")
const btnEncriptar = document.getElementById("encriptar")
const btnDesencriptar = document.getElementById("desencriptar")
const btnCopiar = document.getElementById("copiar")
const muneco = document.getElementById("muneco")
const txtDescatado = document.getElementById("destacado")
const txtInformativo = document.getElementById("informativo")
const txtRespuesta = document.getElementById("respuesta")

btnEncriptar.addEventListener("click", () => {
    const encriptador = new Encriptador()
    
    limpiarTraductor()

    let respuesta = encriptador.encriptar(prepararTexto())

    if(respuesta.length != 0){
        setRespuesta(respuesta)
    } else {
        mensajeNoEncontrado()
    }
})

btnDesencriptar.addEventListener("click", () => {
    const desencriptador = new Desencriptador()

    limpiarTraductor()

    let respuesta = desencriptador.desencriptar(prepararTexto())

    if(respuesta.length != 0){
        setRespuesta(respuesta)
    } else {
        mensajeNoEncontrado()
    }
})

btnCopiar.addEventListener("click", (evento) => {
    let text = txtRespuesta.textContent

    navigator.clipboard.writeText(text.toString()).then(() => {
        alert("Copiado al portapapeles")
    })
})

function prepararTexto() {
    return inputTexto.value.toLowerCase() 
}

function limpiarTraductor() {
    muneco.style.display = "none"
    txtDescatado.style.display = "none"
    txtInformativo.style.display = "none"
}

function mensajeNoEncontrado() {
    muneco.style.display = "block"
    txtDescatado.style.display = "block"
    txtInformativo.style.display = "block"
    txtRespuesta.style.display = "none"
    btnCopiar.style.display = "none"
}

function setRespuesta(respuesta) {
    txtRespuesta.textContent = respuesta
    txtRespuesta.style.display = "block"
    btnCopiar.style.display = "block"
}