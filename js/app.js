
// si exporto mas de una cosa lo que quiero importar va con {contacto, url}
import Contacto from "./classContacto.js"

// declaro variables globales
const nuevoContacto = new Contacto('Juan', 'Perez', '3815646882','juanpereaz@gmail.com', 'Juancho', 'http://127.0.0.1:5500/Index.html?')
console.log(nuevoContacto)

const modalContacto = new bootstrap.Modal(document.querySelector('#Modal'));
const btnAgregar = document.querySelector('#BotonAgregar')



console.log(btnAgregar)
// funciones
function abrirModal(){
    
modalContacto.show()
}

// el resto de la logica del proyexto
btnAgregar.addEventListener('click', abrirModal)