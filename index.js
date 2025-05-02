// 🔹 Servidor Express (siempre activo)
/*const express = require("express");
const generarMensaje = require("./intervalo"); // importa la función del archivo
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  const resultado = generarMensaje(); // ejecuta la función
  res.send(`<pre>${resultado}</pre>`); // envía el resultado como texto
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor listo en puerto ${PORT}');
});*/

const express = require("express");
const obtenerMensaje = require("./intervalo");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1 id="mensaje">Cargando...</h1>
        <script>
          async function actualizarMensaje() {
            const res = await fetch('/mensaje');
            const texto = await res.text();
            document.getElementById('mensaje').innerText = texto;
          }

          actualizarMensaje(); // primera carga
          setInterval(actualizarMensaje, 15000); // actualiza cada 15s
        </script>
      </body>
    </html>
  `);
});

// Nueva ruta para servir solo el mensaje
app.get("/mensaje", (req, res) => {
  const mensaje = obtenerMensaje();
  res.send(mensaje);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor listo en puerto ${PORT}`);
});
