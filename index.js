// Express
const express = require("express");
const app = express();
const port = 8081;

// Handlebars
const handlebars = require("express-handlebars");
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");

// Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Arquivos estáticos
app.use(express.static("public"));

// Rotas
const routes = require("./routes/routes");
app.use('/', routes)

// Servidor
app.listen(port, () => {
  console.log("Conectado ao servidor!");
});
