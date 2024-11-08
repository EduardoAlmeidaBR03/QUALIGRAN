const express = require("express");
const app = express();
const hand = require("express-handlebars");
const Services = require("./services/services");
const routes = require("./routes/routes");
const path = require("path");
const cookieParser = require('cookie-parser');

// Configurar Handlebars como o mecanismo de visualização
app.engine("handlebars", hand.engine({
    helpers: {
        encodeURIComponent: function (url) {
            return encodeURIComponent(url);
        }
    }
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Configurar a pasta 'public' para arquivos estáticos (CSS, imagens, etc.)
app.use(express.static("public"));
app.use(cookieParser());

// Configurar middlewares para o parsing de dados
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar as rotas
app.use("/", routes);

// Iniciar o servidor na porta 2000
app.listen(2000, () => {
    console.log("Servidor rodando na porta 2000");
});
