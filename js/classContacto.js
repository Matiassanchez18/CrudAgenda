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