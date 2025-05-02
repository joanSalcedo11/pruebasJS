const express = require("express");
// 🔹 Servidor Express (siempre activo)
const app = express();
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Servidor ICA</title></head>
      <body>
        <h1>Servidor de ICA funcionando</h1>
        <p>Próxima actualización: ${new Date(Date.now() + 15 * 60 * 1000).toLocaleString()}</p>
      </body>
    </html>
  `);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en puerto ${PORT}`);
});


