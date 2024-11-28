
// si exporto mas de una cosa lo que quiero importar va con {contacto, url}
import Contacto from "./classContacto.js"
// import Swal from 'sweetalert2.js'

// declaro variables globales

// transforma la informacion de json a una normal de js 
const listaContactos = JSON.parse(localStorage.getItem('agendakey')) || []

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
  // dibuja una fila
  dibujarFila(nuevoContacto, listaContactos.length);

  // mostrar un cartel intuitivo para el usuario
  // Swal.fire({
  //   title: "Good job!",
  //   text: "You clicked the button!",
  //   icon: "success"
  // });
}

function LimpiarForm() {
  Form.reset();
}

function guardarLocalStorage() {
  localStorage.setItem('agendakey', JSON.stringify(listaContactos));
}


function crearDatosTabla() {
  // preguntar si el array tiene informacion 
  if (listaContactos.length > 0) {
    // dibujar un afila por cada elemento del array, el map recorre toda el array
    listaContactos.map((Contacto, indice) => dibujarFila(Contacto, indice + 1))

  }

}

// para poder agarrar el boton para eliminar contacto
window.borrarContacto = (id)=>{
  console.log('desde borrar contacto')
  // en que posicion del array esta el contacto que quiero eliminar, contacto hace referencia a los objetos guardados en la lista
  const posicionContacto = listaContactos.findIndex((contacto)=> contacto.id === id)
  console.log(posicionContacto)
  // borrar contacto
  listaContactos.splice(posicionContacto, 1)
  // actualizar local estorage
  guardarLocalStorage();
  // borrar fila de la tabla
  const tBody = document.querySelector('tbody')
  tBody.removeChild(tBody.children[posicionContacto])
 
}


function dibujarFila(Contacto, fila) {
  console.log(Contacto)
  // dibujar el tr
  const tBody = document.querySelector('tbody')
  tBody.innerHTML = tBody.innerHTML + `
    <tr>
              <th scope="row">${fila}</th>
              <td>${Contacto.nombre}</td>
              <td>${Contacto.apellido}</td>
              <td>${Contacto.mail}</td>
              <td>${Contacto.telefono}</td>
              <td>
                <button class="btn btn-warning">
                  <i class="bi bi-plus-square"></i>
                </button>

                <button class="btn btn-danger"  onclick="borrarContacto('${Contacto.id}')">
                  <i class="bi bi-x-square"></i>
                </button>

                <button class="btn btn-info btn" onclick="verDetalle('${Contacto.id}')">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>
    `
}

// para agregar un href, window.local.href sirve para agregar un link, se le agrega window.location.origin que nos da como valor el host de la pagina y el /pages/detalleContacto.html es siempre el mismo, el ?id sirve para agregar un valor al href y que nos muestre los datos del contacto que quiero. 
window.verDetalle = (id)=>{
window.location.href =  `${window.location.origin}/pages/detalleContacto.html?id${id} `
}


// el resto de la logica del proyexto
btnAgregar.addEventListener('click', abrirModal)
Form.addEventListener('submit', crearContacto)
crearDatosTabla();