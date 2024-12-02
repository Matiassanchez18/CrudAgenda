// logica para detalleContacto
// extraer el parametro id de la url
console.log(window.location)

// para buscar parametros de una url en este caso el id del contacto, window.location.search busca los parametros mandados en este caso el id
const parametroUrl = new URLSearchParams(window.location.search)

const id = parametroUrl.get('id')
console.log(id)
// buscar el id del contacto
const agenda = JSON.parse(localStorage.getItem('agendakey')) || []; // me traigo el localstorage en el detallecontacto

const contactoBuscado = agenda.find((contacto) => contacto.id === id)
console.log(contactoBuscado)
// dibujar los datos del contacto encontrado

const texto = document.querySelector('#cardContacto');

// Verificamos si encontramos el contacto
if (contactoBuscado) {
  // Si encontramos el contacto, actualizamos el contenido de la tarjeta
  texto.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${contactoBuscado.nombre} ${contactoBuscado.apellido}</h5>
      <ul>
       
        <li><b>Teléfono:</b> ${contactoBuscado.telefono}</li>
        <li><b>Apodo:</b> ${contactoBuscado.apodo}</li>
      </ul>
    </div>
  `;
} else {
  // Si no se encuentra el contacto, mostramos un mensaje de error
  texto.innerHTML = '<div class="card-body"><h5>Contacto no encontrado</h5></div>';
}
