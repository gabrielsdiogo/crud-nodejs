const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(function() {
    console.log("Conectado Com Banco-De-Dados");
  })
  .catch(function(erro) {
    console.log("Falha ao se conectar");
  });

const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

//Insere informacoes na tabela
// Postagem.create({
//   titulo: "A volta dos que nao foram",
//   conteudo: "uasndoasndaoindoaisndiiasnd"
// });

//Cria tabela no mysql
const Usuarios = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

//insere informacoes na tabela
// Usuarios.create({
//   nome: "Gabriel",
//   sobrenome: "Diogo",
//   idade: "18",
//   email: "gabriel.san.diogo@gmail.com"
// });

//executa a funcao de criar tabela
//Usuarios.sync({ force: true });
