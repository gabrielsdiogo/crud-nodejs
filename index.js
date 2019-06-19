let express = require("express");
let app = express();
const handlebars = require("express-handlebars");

const bodyParser = require("body-parser");
const Post = require("./models/Post");

//config
//template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//body parser para pegar dados do formulario via POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas
app.get("/", (req, res) => {
  Post.findAll().then(function(posts) {
    res.render("home", { posts: posts });
  });
});

app.get("/cad", (req, res) => {
  res.render("formulario"); //exibindo pagina handlebars
});

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
    .then(function() {
      res.redirect("/");
    })
    .catch(function(erro) {
      res.send("Houve um erro" + erro);
    });
});

app.get("/deletar/:id", (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(function() {
      res.redirect("/");
    })
    .catch(function(erro) {
      res.send("Post nao existe");
    });
});

app.get("/editar/:id", (req, res) => {
  Post.findAll({ where: { id: req.params.id } }).then(function(post) {
    res.render("editaPost", { post: post });
  });
});

app.post("/update", (req, res) => {
  Post.update(
    {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    },
    {
      where: { id: req.body.id }
    }
  ).then(function() {
    res.redirect("/");
  });
});
app.listen(8081, function() {
  console.log("Servidor Rodando na url http://localhost:8081");
});
