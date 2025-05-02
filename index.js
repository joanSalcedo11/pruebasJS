const express = require("express");
const app = express();
setInterval(function() {
    for(var n=1;n=40;n++){
      document.getElementById("mensaje").textContent = "hola mundo"+n;
    }
      
  }, 15000);

  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
  }
  );
