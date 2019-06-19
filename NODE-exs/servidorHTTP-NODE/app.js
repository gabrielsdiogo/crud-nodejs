let http = require("http");

http
  .createServer(function(req, res) {
    res.end("OOPA meu veio como vai ? ");
  })
  .listen(8081);

console.log("O servidor esta rodando!");
