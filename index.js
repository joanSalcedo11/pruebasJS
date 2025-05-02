const express = require("express");
// 🔹 Servidor Express (siempre activo)
const app = express();
app.get("/", (req, res) => {
  res.send(
    setInterval(function() {
      for(var n=1;n=40;n++){
      var mensaje = "hola mundo"+n;
    }
      return mensaje;
    }, 15000); // 15000 milisegundos = 15 segundos
  );
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en puerto ${PORT}`);
});
