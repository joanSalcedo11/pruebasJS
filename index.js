const app = express();
app.get("/", (req, res) => {
  res.send(
   setInterval(function() {
     for(var n=1;n=40;n++){
       var mensaje = "hola mundo"+n;
     }
   }
         return mensaje;
   },15000);
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en puerto ${PORT}`);
});

