// 🔹 Servidor Express (siempre activo)
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'intervalo.js'))
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(🚀 Servidor listo en puerto ${PORT});
});

