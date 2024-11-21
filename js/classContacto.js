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
    get id() {
        return this.#id
    }

    set id(value) {
        this.#id = value
    }


    get nombre() {
        return this.#nombre
    }

    set nombre(value) {
        this.#nombre = value
    }


    get apellido() {
        return this.#apellido
    }
    set apellido(value) {
        this.#apellido = value
    }

    get telefono() {
        return this.#telefono
    }
    set telefono(value) {
        this.#telefono = value
    }

    get mail() {
        return this.#mail
    }
    set mail(nuevomail) {
        this.#mail = value
    }

    get apodo() {
        return this.#apodo
    }
    set apodo(value) {
        this.#apodo = value
    }

    get url() {
        return this.#url
    }
    set url(value) {
        this.#url = value
    }


    // metodo para que funcione JSON.stringify
    toJSON(){
     return{
        id: this.id, 
        nombre: this.nombre,
        apellido: this.apellido,
        telefono: this.telefono,
        mail: this.mail,
        apodo: this.apodo,
        url: this.url

     }
    }

}
