
// si exporto mas de una cosa lo que quiero importar va con {contacto, url}
import Contacto from "./classContacto.js"

// declaro variables globales
const listaContactos = [];

const modalContacto = new bootstrap.Modal(document.querySelector('#Modal'));
const btnAgregar = document.querySelector('#BotonAgregar')
const Form = document.querySelector('form')
const email = document.querySelector('#email')
const nombre = document.querySelector('#Nombre')
const apellido = document.querySelector('#apellido')
const apodo = document.querySelector('#apodo')
const telefono = document.querySelector('#telefono')
const url = document.querySelector('#url')




// funciones
function abrirModal() {
    modalContacto.show()
}

function crearContacto(e) {
    e.preventDefault();
    // validar datos de form
    const nuevoContacto = new Contacto(nombre.value, apellido.value, telefono.value, email.value, apodo.value, url.value)

    listaContactos.push(nuevoContacto)
    console.log(listaContactos)

    guardarLocalStorage();

    LimpiarForm();
}

function LimpiarForm() {
    Form.reset();
}

function guardarLocalStorage() {
    localStorage.setItem('agendakey', JSON.stringify(listaContactos));
}

// el resto de la logica del proyexto
btnAgregar.addEventListener('click', abrirModal)
Form.addEventListener('submit', crearContacto)