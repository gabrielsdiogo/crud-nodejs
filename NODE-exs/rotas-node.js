let express = require("express");
let app = express();

app.get("/", function(req, res) {
  res.send("Seja bem-vindo ao meu app");
});

app.get("/sobre", (req, res) => {
  res.send("Pagina Sobre");
});

app.get("/ola/:nome", (req, res) => {
  res.send("<strong>Ola Brow</strong> " + req.params.nome);
});

app.get("/html", (req, res) => {
  //Funcao que envia arquivo
  res.sendFile(__dirname + "/html/index.html");
});

app.listen(8082, function() {
  console.log("Servidor Rodando na url http://localhost:8081");
});
