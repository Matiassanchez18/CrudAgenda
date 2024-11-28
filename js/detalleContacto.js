// logica para detalleContacto
// extraer el parametro id de la url
console.log(window.location)

// para bscar parametros de una url en este caso el id del contacto, window.location.serch busca los parametros mandados en este caso el id
const parametroUrl = new URLSearchParams(window.location.search)

const id = parametroUrl.get('id')
console.log(id)
// buscar el id del contacto
const agenda = JSON.parse(localStorage.getItem('agendakey')) || []; //me traigo el localstorage en el detallecontacto 


const contactoBuscado = agenda.find((contacto)=> contacto.id === id)
console.log(contactoBuscado)
// dibujar los datos del contacto encontrado