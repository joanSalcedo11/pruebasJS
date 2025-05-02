let contador = 1;
let mensajeActual = `Hola mundo ${contador}`;

setInterval(() => {
  contador++;
  mensajeActual = `Hola mundo ${contador}`;
  console.log(mensajeActual); // solo para ver en consola
}, 15000); // cada 15 segundos

function obtenerMensaje() {
  return mensajeActual;
}

module.exports = obtenerMensaje;
