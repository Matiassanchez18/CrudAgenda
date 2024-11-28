
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
let contactoBoleano = true;


// funciones
function abrirModal() {
  modalContacto.show()
}

function determinarAccion(){
  if(contactoBoleano === true){
    crearContacto(e);
  }else{
    window.Actualizar();
  }
}


function crearContacto(e) {
contactoBoleano = true;

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
window.borrarContacto = (id) => {
  console.log('desde borrar contacto')
  // en que posicion del array esta el contacto que quiero eliminar, contacto hace referencia a los objetos guardados en la lista
  const posicionContacto = listaContactos.findIndex((contacto) => contacto.id === id)

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
               <i class="bi bi-plus-square" onclick="Actualizar('${Contacto.id}')"></i>
              </button>
                <button class="btn btn-danger"  onclick="borrarContacto('${Contacto.id}')">
                  <i class="bi bi-x-square"></i>
                </button>

                <button class="btn btn-info btn">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>
    `
}

window.Actualizar = (id) => {
 contactoBoleano = false;
  // Abrir el modal cuando se hace clic en el botón
  abrirModal();

  // Buscar la posición del contacto que se va a actualizar en el array
  const posicionActualizar = listaContactos.findIndex((contacto) => contacto.id === id);
  console.log(posicionActualizar);

  // Obtener el contacto que se va a actualizar
  const ContactoActualizar = listaContactos[posicionActualizar];

  nombre.value = ContactoActualizar.nombre;
  email.value = ContactoActualizar.mail;
  apellido.value = ContactoActualizar.apellido;
  apodo.value = ContactoActualizar.apodo;
  telefono.value = ContactoActualizar.telefono;
  url.value = ContactoActualizar.url;

  // Modificar directamente el objeto en el array
 ContactoActualizar.nombre = nombre.value;
  ContactoActualizar.mail = email.value;
  ContactoActualizar.apellido = apellido.value;
  ContactoActualizar.apodo = apodo.value;
  ContactoActualizar.telefono = telefono.value;
  ContactoActualizar.url = url.value;

  
};





// el resto de la logica del proyexto
btnAgregar.addEventListener('click', abrirModal)
Form.addEventListener('submit', crearContacto)
crearDatosTabla();