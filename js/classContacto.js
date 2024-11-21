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
    get id(){
        return this.#id
    }

    set id(nuevoID){
   this.#id = nuevoID
    }


    get nombre(){
        return this.#nombre
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }


    get apellido(){
        return this.#apellido
    }
    set apellido(nuevoApellido){
        this.#apellido = nuevoApellido
    }

    get telefono(){
        return this.#telefono
    }
    set telefono(nuevotelefono){
        this.#telefono = nuevotelefono
    }

    get mail(){
        return this.#mail
    }
    set mail(nuevomail){
        this.#mail = nuevomail
    }

    get apodo(){
        return this.#apodo
    }
    set apodo(nuevoapodo){
        this.#apodo = nuevoapodo
    }

    get url(){
        return this.#url
    }
    set url(nuevourl){
        this.#url = nuevourl
    }

  
}
