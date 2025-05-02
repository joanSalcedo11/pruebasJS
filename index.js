// 🔹 Servidor Express (siempre activo)
const express = require("express");
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
});

