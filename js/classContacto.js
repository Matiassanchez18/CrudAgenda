// Para exportar una sola cosa se usa export default, pero cuando quiero exportar mas de 1 se usa export y se le agrega a cada cosa que quiero exportar 
// export const url = 'http://127.0.0.1:5500/Index.html?'

export default class Contacto {

    #id
    #nombre
    #apellido
    #telefono
    #mail
    #apodo
    #url


    constructor(nombre, apellido, telefono, mail, apodo, url) {
        this.#id = crypto.randomUUID();
        this.#nombre = nombre
        this.#apellido = apellido
        this.#telefono = telefono
        this.#mail = mail
        this.#apodo = apodo
        this.#url = url

    }
    // agregar get y set
}
